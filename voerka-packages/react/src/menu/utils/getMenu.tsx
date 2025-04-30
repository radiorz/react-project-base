import { getMenuFromFile, MenuDefine } from './getMenuFromFile'
import { MenuItem } from '../types'
import { components } from '@generouted/react-router/client'

import { Link } from 'react-router'
import { forEachTree, TreeNode } from 'flex-tools/tree/forEachTree'
import { pick } from 'flex-tools/object/pick'
import { generatePath, Location } from 'react-router-dom'
import qs from 'qs'

/**
 * @function getMenu
 * @description 函数用于
 * @param 
 * @returns
 * @example
 * getMenu() // ->
 */
export function getMenuByLevel(menu: MenuItem[], level: number = 0): MenuItem[] {
    const { Link } = components()
    forEachTree<TreeNode<MenuItem, 'key'>, TreeNode<MenuItem, 'key'>>(
        menu,
        ({ node, path }) => {
            if (node.path) {
                let routePath = node.path
                if (node.query) {
                    let query = typeof node.query == 'object' ? qs.stringify(node.query) : node.query
                    if (query) routePath += '?' + query
                }
                let state = pick(node, ['hash', 'path', 'label', 'params', 'label', 'tabPos'])
                // 保存菜单路径,用来根据菜单路径显示面包屑
                // [[节点key,节点label,节点path],...],由于state不支持传递数组,所以使用这种方式传递
                state.menuPath = path.map((p) => ({ key: p.key, label: p.label, path: p.path ? generatePath(p.path, p.params) : undefined }))
                node.label = (
                    <Link to={routePath} params={node.params} state={state}>
                        {node.label}
                    </Link>
                )
            }
        },
        {
            path: (node) => node,
            idKey: 'key',
            level,
        },
    )
    return menu
}
export function getMenu(level: number = 0) {
    // 约定从src/menu.tsx中获取主菜单
    return getMenuByLevel(getMenuFromFile(), level)
}
