/**
 * 主要提供vite通用配置,减少应用重复配置
 */
import { defineConfig as viteDefineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
/**
 *
 * @param {(viteConfig:viteDefineConfig,mode?:string)=>void} viteConfig
 * @returns
 */
export function defineConfig(viteConfig, options = {}) {
    const { basePath } = Object.assign(
        {
            basePath: 'src',
        },
        options,
    )

    return ({ mode }) => {
        const newViteConfig = viteDefineConfig({
            plugins: [
                react(),
                generouted({
                    output: `${basePath}/routes/routes.ts`,
                }),
            ],
            define: {
                'process.env': loadEnv(mode, process.cwd(), ['VITE_', 'VOERKA_']),
            },
            resolve: {
                alias: {
                    '@/': `/${basePath}/`,
                },
            },
            envPrefix: ['VITE_', 'VOERKA_'],
            build: {
                target: ['es2022', 'chrome100', 'safari13'],
                minify: true,
                sourcemap: mode !== 'production',
            },
            css: {
                preprocessorOptions: {
                    // 全局样式引入
                    less:
                        mode !== 'test'
                            ? {
                                  additionalData: `@import "./src/styles/global.less";`,
                                  javascriptEnabled: true,
                              }
                            : {},
                },
            },
        })
        if (typeof viteConfig === 'function') {
            viteConfig(newViteConfig, mode)
        }
        return newViteConfig
    }
}
