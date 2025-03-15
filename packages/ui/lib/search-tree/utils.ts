import { TreeNodeProps } from "./search-tree.interface";
// 展开树节点
export const findExpandedKeysBySearchText = (
  treeData: any[] = [],
  searchText: string = ""
) => {
  const expandedKeys: string[] = [];

  const traverseTree = (nodes: TreeNodeProps[]) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node?.title?.includes(searchText) && node?.parentKey) {
        expandedKeys.push(node?.parentKey);
      }
      if (node.children) {
        traverseTree(node.children);
      }
    }
  };

  traverseTree(treeData);
  const result =  [...new Set(expandedKeys)];
  return result
};
