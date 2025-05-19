import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import banner from "vite-plugin-banner";
import packageJson from "./package.json";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const name = packageJson.name.split("/")[1];
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    tailwindcss(),
    react(),
    banner(`
    packageName: ${packageJson.name} 
    version: ${packageJson.version}
    `),
  ],
  build: {
    sourcemap: true,
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
          antd: "antd",
          "react-router": "ReactRouter",
        },
      },
      external: ["react", "react-dom", "antd", "react-router"],
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
