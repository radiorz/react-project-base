import { useMemo } from 'react'
import { getMenu } from './utils/getMenu'
import { MenuItem } from './types'

/**
 *
 * 返回主菜单列表,用来渲染菜单时使用
 *
 * @returns
 */
export function useMenu(level: number = 0) {
    return useMemo<MenuItem[]>(() => {
        return getMenu(level)
    }, [level])
}
