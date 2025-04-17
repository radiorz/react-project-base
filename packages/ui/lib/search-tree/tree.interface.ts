export interface TreeNode {
  key?: string;
  title?: string;
  children?: TreeNode[];
  icon?: string;
  parentKey?: string;
  [key: string]: any;
}
