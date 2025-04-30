
import { defineConfig } from 'tsup'
//@ts-ignore
import copyStaticFile from "esbuild-copy-static-files"
//@ts-ignore
import AnalyzerPlugin from 'esbuild-analyzer'
import RawPlugin from "esbuild-plugin-raw"

export default defineConfig([
    {
        entry: [
            'src/index.ts'
        ],
        format: ['esm','cjs'],
        outExtension:({format}) =>({js: format==='esm' ?  '.mjs' : '.js'}),
        dts:true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake:true,  
        minify:'terser',
        terserOptions:{
            keep_classnames:true,
            mangle: false,
            keep_fnames: true,
            compress: true,
            format: {
                comments: false,
            }
        },
        cjsInterop:true,
        external:[
            "flex-tools",
            "flex-decorators",
            "antd",
            "react",
            "react-dom"
        ],
        noExternal:[
            "@voerka/browser"
        ],
        loader:{
            ".png":"dataurl",        
            ".svg":"text"
        },
        esbuildPlugins:[
            AnalyzerPlugin(),
            RawPlugin(),
            copyStaticFile({
                src:"src/cli",
                dest:"dist/cli"
            }),
            copyStaticFile({
                src:"src/vite.js",
                dest:"dist/vite.js"
            })
        ]
    }
])




