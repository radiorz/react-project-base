import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { InlineActionGroup, type Action } from "../action-group";
import HighlightTitle from "./HighlightTitle";

export interface TreeNodeComponentProps {
  item: any;
  renderIcon?: Function;
  searchValue: string;
  nodeActions?: Action[];
  handleNodeAction?: Function;
}

export const DEFAULT_TREE_NODE_ACTIONS = [
  { icon: <PlusOutlined />, name: "addChild", title: "添加子节点" },
  { icon: <EditOutlined />, name: "update", title: "编辑节点" },
  { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
];

export const TreeNodeComponent = ({
  item,
  renderIcon,
  searchValue,
  nodeActions = DEFAULT_TREE_NODE_ACTIONS,
  handleNodeAction,
}: TreeNodeComponentProps) => {
  const icon = renderIcon?.(item);

  function _handleNodeAction(type: string) {
    handleNodeAction?.(type, item);
  }
  return (
    <div className="relative flex items-center justify-between min-w-0 group">
      <div className="inline-flex items-center min-w-0 gap-2 truncate">
        {icon}
        <HighlightTitle
          value={item?.title}
          highlightText={searchValue}
        ></HighlightTitle>
      </div>
      <InlineActionGroup
        className="absolute right-0 hidden group-hover:flex"
        actions={nodeActions}
        handleAction={_handleNodeAction}
      ></InlineActionGroup>
    </div>
  );
};
