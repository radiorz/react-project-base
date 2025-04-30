/**
 * @author
 * @file AuthLayout.tsx
 * @fileBase AuthLayout
 * @path packages\react\src\components\AuthLayout.tsx
 * @from
 * @desc
 * @example
 */

import { useModule, useModuleStore } from '@/hooks'
import { AuthModule } from '@/modules'
import { ReactNode, useEffect } from 'react'
export interface AuthLayoutProps {
    children: ReactNode
}
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const authModule = useModule<AuthModule>('auth')
    const { useReactive } = useModuleStore<AuthModule>('auth')
    const [isLogin] = useReactive('isLogin')
    useEffect(() => {
        if (!isLogin) {
            authModule.goToLogin()
        }
    }, [isLogin])
    return children
}

// 默认导出
export default AuthLayout
