import { APP_START_EVENT, getApp } from '@voerka/core'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ReactApplication } from '../app'

// 创建 Context
export const AppContext = createContext<ReactApplication | null>(null)
export interface AppProviderProps {
    fallback: ReactNode
    children: ReactNode
}
// 创建 Provider 组件
export const VoerkaApplicationProvider: React.FC<AppProviderProps> = ({ children, fallback }) => {
    const app = getApp() as ReactApplication
    if (!app) {
        throw new Error(`Voerka应用不存在`)
    } 
    const [isAppReady, setIsAppReady] = useState(false)

    // 异步等待全局对象的加载
    useEffect(() => {
        app.waitFor(APP_START_EVENT).then(() => {
            setIsAppReady(true)
        })
    }, [])
    if (!isAppReady) {
        return fallback
    }
    return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

// 自定义 Hook 用于访问 Context
export const useApp = () => {
    const context = useContext(AppContext)
    if (context === null) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return context
}
