let roadmapDbPromise = null;
let indexedDbWriteQueue = Promise.resolve();

function canUseIndexedDb() {
  return typeof indexedDB !== "undefined";
}

function openRoadmapDatabase() {
  if (!canUseIndexedDb()) {
    return Promise.reject(new Error("IndexedDB is not available."));
  }

  if (roadmapDbPromise) return roadmapDbPromise;

  roadmapDbPromise = new Promise((resolve, reject) => {
    let request;
    try {
      request = indexedDB.open(ROADMAP_DB_NAME, ROADMAP_DB_VERSION);
    } catch (error) {
      roadmapDbPromise = null;
      reject(error);
      return;
    }

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(ROADMAP_STATE_STORE)) {
        db.createObjectStore(ROADMAP_STATE_STORE);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      roadmapDbPromise = null;
      reject(request.error);
    };
    request.onblocked = () => {
      roadmapDbPromise = null;
      reject(new Error("IndexedDB upgrade was blocked by another open tab."));
    };
  });

  return roadmapDbPromise;
}

function readIndexedDbState() {
  return openRoadmapDatabase().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(ROADMAP_STATE_STORE, "readonly");
    const request = transaction.objectStore(ROADMAP_STATE_STORE).get(ROADMAP_STATE_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    transaction.onerror = () => reject(transaction.error);
  }));
}

function writeIndexedDbState(value) {
  return openRoadmapDatabase().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(ROADMAP_STATE_STORE, "readwrite");
    transaction.objectStore(ROADMAP_STATE_STORE).put(cloneStorageValue(value), ROADMAP_STATE_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error || new Error("IndexedDB transaction aborted."));
  }));
}

function readLegacyLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeLegacyLocalState(value) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Local persistence is best-effort when browser storage is restricted.
  }
}

function cloneStorageValue(value) {
  return JSON.parse(JSON.stringify(value));
}

async function loadPersistedState() {
  const indexedState = await readIndexedDbState().catch(() => null);
  if (indexedState) return indexedState;

  const legacyState = readLegacyLocalState();
  if (legacyState) {
    await writeIndexedDbState(legacyState).catch(() => {});
    return legacyState;
  }

  return null;
}

async function savePersistedState(value) {
  const snapshot = cloneStorageValue(value);
  writeLegacyLocalState(snapshot);
  indexedDbWriteQueue = indexedDbWriteQueue
    .catch(() => {})
    .then(() => writeIndexedDbState(snapshot))
    .catch(() => {});
  return indexedDbWriteQueue;
}
