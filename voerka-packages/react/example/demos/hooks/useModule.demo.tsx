import { useModule } from '@/hooks/useModule'

export function UseModuleDemo() {
    const module = useModule('theme')
    console.log(`module`, module)
    return <div>UseModuleDemo 模块", 配置: {JSON.stringify(module.state)}</div>
}
