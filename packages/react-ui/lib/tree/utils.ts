export function addKeyToNode(tree: any[] = [], parentKey: string = ""): any[] {
  return tree.map((item, i) => {
    const key = parentKey ? `${parentKey}-${i}` : `${i}`;
    return {
      ...item,
      parentKey,
      key,
      children: item.children && addKeyToNode(item.children, key),
    };
  });
}
export function updateTreeData(
  tree: any[],
  nodeId: "",
  updatedNode: any
): any[] | null {
  if (!tree) return null;
  return tree.map((node) => {
    if (node.id === nodeId) {
      return updatedNode;
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, nodeId, updatedNode),
      };
    }
    return node;
  });
}

export function findNodeByKey(tree: any[], key: string): any {
  if (!tree || !Array.isArray(tree)) {
    return null;
  }

  for (const node of tree) {
    if (node.key === key) {
      return node;
    }
    if (node.children) {
      const foundNode = findNodeByKey(node.children, key);
      if (foundNode) {
        return foundNode;
      }
    }
  }
  return null;
}
