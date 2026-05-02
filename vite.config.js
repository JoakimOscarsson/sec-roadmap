import { defineConfig } from "vite";
import { readFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { build as esbuild } from "esbuild";

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

function auxiliaryClassicScriptsPlugin() {
  return {
    name: "auxiliary-classic-scripts",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "js/pretty-export.js",
        source: readFileSync(new URL("./js/pretty-export.js", import.meta.url), "utf8")
      });
    },
    async writeBundle(options) {
      const outDir = options.dir || "dist";
      const outfile = join(outDir, "js", "journal-runtime.js");
      mkdirSync(dirname(outfile), { recursive: true });
      await esbuild({
        entryPoints: [new URL("./js/journal-runtime-entry.js", import.meta.url).pathname],
        bundle: true,
        outfile,
        format: "iife",
        platform: "browser",
        target: "es2020",
        minify: true
      });
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [buildEntryPlugin(), auxiliaryClassicScriptsPlugin(), portableFileBuildPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsInlineLimit: 1_000_000,
    chunkSizeWarningLimit: 1_000,
    modulePreload: false
  }
});
