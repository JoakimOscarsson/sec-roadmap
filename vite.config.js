import { defineConfig } from "vite";

function portableFileBuildPlugin() {
  return {
    name: "portable-file-build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html
          .replace(/<link rel="modulepreload"[^>]+>\n\s*/g, "")
          .replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, '<script defer src="$1"></script>');
      }
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [portableFileBuildPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsInlineLimit: 1_000_000,
    chunkSizeWarningLimit: 1_000,
    modulePreload: false
  }
});
