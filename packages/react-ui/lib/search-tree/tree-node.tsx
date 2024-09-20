import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { InlineActionGroup, type Action } from "../action-group";

export interface TreeNodeComponentProps {
  item: any;
  renderIcon?: Function;
  searchValue: string;
  nodeActions?: Action[];
  handleNodeAction?: Function;
}

export function useSearchTitle(title: string, searchValue: string) {
  if (typeof title === "undefined" || title === "") {
    return <span className="truncate">{title || "-"}</span>;
  }
  if (!searchValue) {
    return <span className="truncate">{title || "-"}</span>;
  }
  const index = title?.indexOf(searchValue || "");
  if (typeof index !== "undefined" && index > -1) {
    const beforeStr = title?.substring(0, index);
    const afterStr = title?.substring(index + searchValue.length);
    return (
      <span className="truncate">
        {beforeStr}
        <span className="text-red-500 bg-yellow-200 dark:text-red-600 dark:bg-yellow-700">
          {searchValue}
        </span>
        {afterStr}
      </span>
    );
  }
  return <span className="truncate">{title || "-"}</span>;
}
export const DEFAULT_TREE_NODE_ACTIONS = [
  { icon: <PlusOutlined />, name: "addChild", title: "添加子节点" },
  { icon: <EditOutlined />, name: "update", title: "编辑节点" },
  { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
];

export const TreeNode = ({
  item,
  renderIcon,
  searchValue,
  nodeActions = DEFAULT_TREE_NODE_ACTIONS,
  handleNodeAction,
}: TreeNodeComponentProps) => {
  const title = useSearchTitle(item?.title, searchValue);
  const icon = renderIcon?.(item);

  function _handleNodeAction(type: string) {
    handleNodeAction?.(type, item);
  }
  return (
    <div className="relative flex items-center justify-between group ">
      <div className="flex items-center gap-2">
        {icon}
        {title}
      </div>
      <InlineActionGroup
        className="absolute right-0 hidden group-hover:flex"
        actions={nodeActions}
        handleAction={_handleNodeAction}
      ></InlineActionGroup>
    </div>
  );
};
