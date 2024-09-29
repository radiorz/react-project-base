import { defineConfig } from "vite";
import packageJson from "./package.json";
import react from "@vitejs/plugin-react-swc";
import banner from "vite-plugin-banner";
import { fileURLToPath, URL } from "node:url";
const name = packageJson.name.split("/")[1];
export default defineConfig({
  plugins: [
    react(),
    banner(`
    packageName: ${packageJson.name} 
    version: ${packageJson.version}
    `),
  ],
  build: {
    lib: {
      entry: "./lib/index.ts",
      name: toBigCamelCase(name),
      fileName: name,
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          ol: "ol",
          rlayers: "rlayers",
        },
      },
      external: ["react", "react-dom", "ol", "rlayers"],
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
