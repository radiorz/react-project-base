import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { type NodeAction } from "./search-tree.interface";
export interface TreeNodeComponentProps {
  item: any;
  renderIcon?: Function;
  searchValue: string;
  nodeActions?: NodeAction[];
  handleNodeAction?: Function;
}
export function useSearchTitle(title: string, searchValue: string) {
  const index = title?.indexOf(searchValue || "");
  let titleComp;
  if (typeof index !== "undefined" && index > -1) {
    const beforeStr = title?.substring(0, index);
    const afterStr = title?.substring(index + searchValue.length);
    titleComp = (
      <span>
        {beforeStr}
        <span className="text-red-500 bg-yellow-200">{searchValue}</span>
        {afterStr}
      </span>
    );
  } else {
    titleComp = <span>{title || "-"}</span>;
  }
  return titleComp;
}

export const TreeNode = ({
  item,
  renderIcon,
  searchValue,
  nodeActions = [
    { icon: <PlusOutlined />, name: "addChild", title: "添加子节点" },
    { icon: <EditOutlined />, name: "update", title: "编辑节点" },
    { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
  ],
  handleNodeAction,
}: TreeNodeComponentProps) => {
  const title = useSearchTitle(item?.title, searchValue);
  const icon = renderIcon?.(item);
  function _handleNodeAction(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    type: string
  ) {
    e.stopPropagation();
    handleNodeAction?.(type, item);
  }
  return (
    <div className="flex items-center justify-between w-full group">
      <div className="flex items-center gap-2">
        {icon}
        {title}
      </div>
      {/* 父元素触发发显示 */}
      <div className="hidden group-hover:block">
        {/* TODO 当特别窄的时候之显示一个...图标 */}
        {nodeActions.map(({ icon, name }) => {
          return (
            <Button
              icon={icon}
              size="small"
              onClick={(e) => _handleNodeAction(e, name)}
              className="mr-1"
            />
          );
        })}
      </div>
    </div>
  );
};
