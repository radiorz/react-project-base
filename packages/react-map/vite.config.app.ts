import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-router", "react-router-dom"],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./lib", import.meta.url)),
    },
  },
});
export function toBigCamelCase(str: string) {
  str = str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase()); // 将连字符和下划线后的字符转换为大写
  return str.replace(/^\w/, (c) => c.toUpperCase()); // 将首字母转换为大写
}
