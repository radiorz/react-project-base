/**
 * @author
 * @file useApp.demo.ts
 * @fileBase useApp.demo
 * @path packages\react\src\contexts\useApp.demo.ts
 * @from
 * @desc
 * @example
 */

import { useApp } from '@/index'
export interface UseAppDemoProps {
    // value: any
}
export const UseAppDemo: React.FC<UseAppDemoProps> = () => {
    const app = useApp()
    return (
        <div>
            <span>UseAppDemo 应用配置</span>
            <span>应用的所有配置: {JSON.stringify(app.settings)}</span>
            <span> 所有的应用模块名称: {Object.entries(app.modules).map(([key, module]) => module.id)}</span>
        </div>
    )
}

// 默认导出
export default UseAppDemo
