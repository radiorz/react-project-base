import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
/**
 *
 * @param {(viteConfig:viteDefineConfig)=>void} viteConfig
 * @returns
 */
const env = loadEnv("development", process.cwd());
export default defineConfig(({ mode }) => {
  return {
    server: {
      proxy: {
        "^/api": {
          target: env.VITE__VOERKA__HTTP__PROXY || "http://127.0.0.1:8000",
          // rewrite: (path) => path.replace(/^\/voerka/, ''),
          // ws: true,
          changeOrigin: true,
        },
      },
    },
    define: {
      "process.env": { ...process.env, ...loadEnv(mode, process.cwd()) },
    },
    plugins: [
      react({
        babel: {
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@/": `/src/`,
      },
    },
    envPrefix: ["VITE_", "VOERKA_"],
    build: {
      outDir: "dist-example",
      target: ["es2022", "chrome100", "safari13"],
      minify: false,
      sourcemap: mode !== "production",
      terserOptions: {
        compress: true,
        mangle: false,
        format: {
          comments: false,
        },
      },
      lib: {
        entry: "src/index.ts",
        formats: ["es"],
        name: "voerka",
        fileName: "index",
      },
      rollupOptions: {
        external: ["antd", "react", "react-dom"],
        onwarn(warning, defaultHandler) {
          if (warning.code === "SOURCEMAP_ERROR") return;
          defaultHandler(warning);
        },
      },
    },

    css: {
      preprocessorOptions: {
        less:
          mode !== "test"
            ? {
                additionalData: `@import "./src/styles/global.less";`,
                javascriptEnabled: true,
              }
            : {},
      },
    },
  };
});
