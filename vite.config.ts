import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: ["src/background.ts", "src/content.ts", "src/views/main.tsx"],
      formats: ["es"],
      // 按照文件名称命名
      fileName: (_, entryName) =>
        `${entryName === "main" ? "popup" : entryName}.js`,
      cssFileName: "popup",
    },
    // all inline assets
    assetsInlineLimit: () => true,
    emptyOutDir: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
