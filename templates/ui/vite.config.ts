import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import banner from 'vite-plugin-banner';
import packageJson from './package.json';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

const name = getUnScopedName(packageJson.name);
export default defineConfig({
  server: {
    host: '0.0.0.0',
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
      entry: './lib/index.tsx',
      name: toBigCamelCase(name),
      fileName: name,
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          antd: 'antd',
          'react-router': 'ReactRouter',
        },
      },
      external: ['react', 'react-dom', 'antd', 'react-router'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
});
export function toBigCamelCase(str: string) {
  str = str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase()); // 将连字符和下划线后的字符转换为大写
  return str.replace(/^\w/, (c) => c.toUpperCase()); // 将首字母转换为大写
}
export function getUnScopedName(str: string): string {
  // 如果字符串以 @ 开头，表示是一个作用域包
  if (str.startsWith('@')) {
    // 找到第一个斜杠的位置
    const firstSlashIndex = str.indexOf('/');
    // 返回斜杠后面的部分，即未作用域的包名
    return str.slice(firstSlashIndex + 1);
  }
  // 如果不是作用域包，直接返回原字符串
  return str;
}
