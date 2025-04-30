/**
 * 读取全局应用配置
 *
 *
 * 全局应用配置保存在settingsModule模块
 *
 * let settings = getSettings(keyPath) 读取全局应用配置
 *
 * let settings = getSettings<'>(keyPath)
 *
 *
 */
import { getModule, ModuleBase } from '@voerka/core'
import { getVal } from './getVal'
import { VoerkaSettings } from '@voerka/core'
export function getSettings(): VoerkaSettings | Promise<VoerkaSettings>
export function getSettings<T extends string>(keyOrPath: string): T
export async function getSettings(): Promise<VoerkaSettings> {
    const keyOrPath = arguments[0] as string
    const module = await getModule('settings')!
    if (keyOrPath) {
        return getVal((module as ModuleBase).state, keyOrPath.split('.'))
    } else {
        return (module as ModuleBase).state as VoerkaSettings
    }
}
