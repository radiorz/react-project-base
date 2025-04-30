import { MenuItem, NormalizedMenuItem } from '../types';

export const MenuDefine = import.meta.glob('/src/menu.tsx', { eager: true });
// export function normalizeMenu(menu: MenuItem[]) {
//     menu.forEach((item) => {
//         if (item.children) {
//             normalizeMenu(item.children)
//         }
//     })
// }

export function normalizeMenuItem(item: MenuItem): NormalizedMenuItem {
    return item as Required<MenuItem>;
}

export const getMenuFromFile = () => {
    const items = Object.values(MenuDefine) as MenuItem[];
    if (items.length > 0) {
        return items[0].default as unknown as MenuItem[];
    }
    return items;
};
