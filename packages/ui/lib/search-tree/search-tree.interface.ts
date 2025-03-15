export interface TreeNodeProps {
  key?: string;
  title?: string;
  children?: TreeNodeProps[];
  icon?: string;
  parentKey?: string;
}
