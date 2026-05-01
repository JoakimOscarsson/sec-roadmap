const STORAGE_KEY = "securityRoadmapV3.progress";
const ROADMAP_DB_NAME = "security-roadmap-v3";
const ROADMAP_DB_VERSION = 1;
const ROADMAP_STATE_STORE = "appState";
const ROADMAP_STATE_KEY = "current";

const JOURNAL_TYPES = [
  "Study note",
  "Practice log",
  "Reflection",
  "Question",
  "Deliverable note",
  "Resource note"
];

const SPECIALIZATION_TRACK_NAMES = {
  A: "Embedded R&D",
  B: "AI / LLM / Agentic Security",
  C: "Defence Industry",
  D: "IoT Product Security",
  E: "Automotive Cybersecurity",
  F: "Cloud / SaaS / Platform Security",
  G: "Telecom / 5G Security",
  H: "OT / ICS Security",
  I: "Public Sector Security",
  X: "Cross-Domain Intersections"
};

const PORTFOLIO_REFERENCE_ALIASES = {
  "data classification model": ["Data classification standard"],
  "identity model": ["Identity model diagram"],
  "backup and restore evidence": ["Backup and restore report"],
  "statement of applicability": ["Statement of Applicability draft"],
  "hardening baseline": ["Hardening checklist"],
  "policy framework": ["Security policy"],
  "security investment business case": ["Business case for one security investment"],
  "logging and detection coverage map": ["Cloud logging and detection coverage map"],
  "cloud incident runbook": ["Cloud incident runbook", "Cloud incident runbooks"],
  "cloud control mapping": ["Cloud control mapping to ISO/NIST/CSA/CIS", "Control mapping to ISO/NIST/CIS"],
  "dependency and sbom process": ["SBOM and dependency process"],
  "vulnerability disclosure policy": ["Vulnerability disclosure and patch process"],
  "software supply-chain risk assessment": ["SBOM and dependency process"],
  "dpia": ["DPIA template and mock DPIA"],
  "ropa": ["ROPA example"],
  "breach notification matrix": ["Breach notification checklist"],
  "control mapping to iso/nist/cis": ["Cloud control mapping to ISO/NIST/CSA/CIS"],
  "säkerhetsskyddsanalys": ["Säkerhetsskyddsanalys template", "Defence säkerhetsskyddsanalys outline"],
  "classification handling procedure": ["Security-classified information handling procedure"],
  "sua decision checklist": ["Supplier/SUA decision checklist"],
  "supplier flow-down checklist": ["Supplier flow-down requirements"],
  "security-sensitive outsourcing memo": ["Security-sensitive outsourcing decision memo"],
  "secure boot and update requirements": ["Secure boot and update design"],
  "manufacturing provisioning checklist": ["Manufacturing and provisioning risk checklist"],
  "end-of-life plan": ["End-of-support and decommissioning plan", "End-of-life and decommissioning plan"],
  "llm/rag/agent threat model": ["LLM/RAG threat model", "Agentic threat model"],
  "mcp/tool review checklist": ["Tool and MCP server review checklist"],
  "iot security architecture and cra mapping": ["IoT architecture and trust-boundary diagram", "CRA/ETSI/NIST control mapping"],
  "automotive tara and iso/sae 21434 evidence checklist": ["Automotive TARA", "ISO/SAE 21434 evidence checklist"],
  "cloud-native product architecture and shared responsibility mapping": ["Cloud reference architecture", "Shared responsibility matrix"],
  "cross-domain architecture memo": ["Cross-domain architecture map"]
};

const REVIEW_BUCKETS = [
  { id: "older", title: "6 Months+", minDays: 184, maxDays: Infinity },
  { id: "six-months", title: "1 Month+", minDays: 32, maxDays: 183 },
  { id: "month", title: "2 Weeks+", minDays: 15, maxDays: 31 },
  { id: "two-weeks", title: "1 Week+", minDays: 8, maxDays: 14 },
  { id: "week", title: "Last Week", minDays: 0, maxDays: 7 },
  { id: "no-date", title: "No Active-Level Date", minDays: Infinity, maxDays: Infinity },
  { id: "complete", title: "Review Complete", minDays: Infinity, maxDays: Infinity }
];
