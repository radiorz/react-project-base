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
  if (typeof searchValue === "undefined" || searchValue === "") {
    return <span className="truncate">{title || "-"}</span>;
  }
  if (title.includes(searchValue)) {
    const otherTexts = title.split(searchValue);
    return (
      <span>
        {otherTexts.map((text, index) => {
          if (index !== otherTexts.length - 1) {
            return (
              <span>
                {text}
                <span className="text-red-500 bg-yellow-200 dark:text-red-200 dark:bg-yellow-700">
                  {searchValue}
                </span>
              </span>
            );
          }
          return text
        })}
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
    <div className="relative flex items-center justify-between min-w-0 group">
      <div className="inline-flex min-w-0 gap-2 truncate">
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
