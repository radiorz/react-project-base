interface panel {
  id: string;
  x: number;
  y: number;
  label: string; // 标签
  type: PANEL_TYPE;
  nodes: Node[];
  // 样式
  labelContainerColor: string[];
}
enum PANEL_TYPE {
  start = "start",
  condition = "condition",
}

interface Node {
  direction: NODE_DIRECTION; // 方向
  level: number; //
  enumType: NODE_ENUMTYPE;
  label?: string; // 标签
  connectedNumber?: number; // 链接数量
  slot: string; // 插槽
  // 样式
  color?: string; // 颜色
}
// enum NODE_LEVEL {
//   "0" = "0",
//   "1" = "1",
// }

enum NODE_DIRECTION {
  OUT = "OUT",
  IN = "IN",
}

enum NODE_ENUMTYPE {
  call = "call",
  int = "int", //
}

export interface Link {
  source: Node;
  target: Node;
}
    