import { useSettings } from '@/index'

export function UseSettingsDemo() {
    const settings = useSettings()
    return (
        <div>
            全局配置
            {JSON.stringify(settings)}
        </div>
    )
}
