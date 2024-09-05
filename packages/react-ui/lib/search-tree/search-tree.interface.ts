export interface TreeNodeProps {
  key?: string;
  title?: string;
  children?: TreeNodeProps[];
  icon?: string;
  parentKey?: string;
}
export interface NodeAction {
  icon: any;
  name: string;
  title?: string;
}
