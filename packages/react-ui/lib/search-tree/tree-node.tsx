import {
  DeleteOutlined,
  EditOutlined,
  MenuOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import React, { useState } from "react";
import { type NodeAction } from "./search-tree.interface";

export interface TreeNodeComponentProps {
  item: any;
  renderIcon?: Function;
  searchValue: string;
  nodeActions?: NodeAction[];
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
        <span className="text-red-500 bg-yellow-200">{searchValue}</span>
        {afterStr}
      </span>
    );
  }
  return <span className="truncate">{title || "-"}</span>;
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
  const [open, setOpen] = useState(false);
  function _handleNodeAction(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    type: string
  ) {
    e.stopPropagation();
    handleNodeAction?.(type, item);
    setOpen(false);
  }

  // Split actions
  const primaryActions = nodeActions.slice(0, 3);
  // console.log(primaryActions);
  const overflowActions = nodeActions.slice(3);
  const overflowActionItems = overflowActions.map((item, i) => {
    return {
      key: i,
      label: (
        <div onClick={(e) => _handleNodeAction(e, item.name)}>
          {item.icon} {item.title}
        </div>
      ),
    };
  });
  return (
    <div className="relative flex items-center justify-between group ">
      <div className="flex items-center gap-2">
        {icon}
        {title}
      </div>
      <div className="absolute right-0 items-center justify-center hidden gap-1 group-hover:flex">
        {primaryActions.map(({ icon, name }, i) => (
          <Button
            key={i}
            icon={icon}
            size="small"
            onClick={(e) => _handleNodeAction(e, name)}
          />
        ))}
        {/* 更多选项藏在这里头 */}
        {overflowActions.length > 0 && (
          <Dropdown
            open={open}
            onOpenChange={(open) => setOpen(open)}
            menu={{ items: overflowActionItems }}
          >
            <Button icon={<MenuOutlined />} size="small" />
          </Dropdown>
        )}
      </div>
    </div>
  );
};
