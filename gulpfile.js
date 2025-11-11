import { series, parallel } from "gulp";
import { build } from "vite";
import react from "@vitejs/plugin-react-swc";
import { rmSync } from "node:fs";

const configs = [
  {
    entry: "src/background.ts",
    fileName: "background.js",
    name: "BookmarkSearchBackground",
  },
  {
    entry: "src/views/main.tsx",
    plugins: [react()],
    fileName: "popup.js",
    cssFileName: "popup",
    name: "BookmarkSearchPopup",
  },
];

const cleanDist = () => {
  rmSync("dist", { recursive: true, force: true });
  console.log("🧹 dist is cleaned, start building...");
  return Promise.resolve();
};

const isWatch = process.argv.includes("--w");

export default series(
  cleanDist,
  parallel(
    ...configs.map((config) => {
      return async () => {
        console.log("🚀 start build ", config.entry);
        /**
         * @type {import("vite").UserConfig}
         */
        const viteConfig = {
          plugins: config.plugins || [],
          build: {
            lib: {
              entry: config.entry,
              name: config.name,
              formats: isWatch ? ["es"] : ["iife"],
              fileName: () => config.fileName,
              cssFileName: config.cssFileName,
            },
            minify: isWatch ? false : "terser",
            terserOptions: isWatch
              ? {}
              : {
                  compress: {
                    drop_debugger: true,
                    drop_console: true,
                    sequences: true,
                    dead_code: true,
                  },
                  format: {
                    comments: false,
                  },
                  mangle: true,
                },
            emptyOutDir: false,
            rollupOptions: {
              output: {
                manualChunks: void 0,
                inlineDynamicImports: true,
              },
            },
            ...(isWatch
              ? {
                  watch: {
                    exclude: ["dist/**", "node_modules/**"], // ✅ 忽略输出目录
                  },
                }
              : {}),
          },
          define: {
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
          },
        };
        // is watch
        if (isWatch) {
          const watcher = await build(viteConfig);
          watcher.on("event", (e) => {
            if (e.code === "BUNDLE_START") {
              console.log(`[${config.fileName}] 🔄 rebuilding...`);
            } else if (e.code === "BUNDLE_END") {
              console.log(`[${config.fileName}] ✅ build done`);
            } else if (e.code === "ERROR") {
              console.error(`[${config.fileName}] ❌ build error`, e.error);
            }
          });
        } else {
          await build(viteConfig);
          console.log("✅ build ", config.entry, " success");
        }
      };
    }),
  ),
);
