import { TreeNode } from "./tree.interface";
// 展开树节点
export const findExpandedKeysBySearchText = (
  treeData: TreeNode[] = [],
  searchText: string = ""
) => {
  const expandedKeys: string[] = [];
  // 遍历取值
  const traverseTree = (nodes: TreeNode[]) => {
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
  const result = [...new Set(expandedKeys)];
  return result;
};
