import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@milkdown") || id.includes("node_modules/prosemirror")) {
            return "editor";
          }
          if (id.includes("node_modules")) return "vendor";
        }
      }
    }
  }
});
