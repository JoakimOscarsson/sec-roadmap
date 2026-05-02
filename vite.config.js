import { defineConfig } from "vite";

function buildEntryPlugin() {
  return {
    name: "build-entry",
    apply: "build",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html.replace("</body>", '  <script type="module" src="./js/main.js"></script>\n</body>');
      }
    }
  };
}

function portableFileBuildPlugin() {
  return {
    name: "portable-file-build",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html
          .replace(/\s*<script id="source-entry-loader">[\s\S]*?<\/script>/, "")
          .replace(/<link rel="modulepreload"[^>]+>\n\s*/g, "")
          .replace(/<script type="module"(?: crossorigin)? src="([^"]+)"><\/script>/, '<script defer src="$1"></script>')
          .replace(/\s+crossorigin(?=[\s>])/g, "");
      }
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [buildEntryPlugin(), portableFileBuildPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsInlineLimit: 1_000_000,
    chunkSizeWarningLimit: 1_000,
    modulePreload: false
  }
});
