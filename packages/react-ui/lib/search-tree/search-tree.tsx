import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Spin, Tree } from "antd";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Key, useRef, useState } from "react";
import { useMaxHeight } from "../max-height";
import styles from "./search-tree.module.css" assert { type: "css" };

interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  icon?: string;
  resource?: {
    type: string;
  };
}

interface SearchTreeProps {
  renderIcon: (item: any) => JSX.Element;
  onSelect: (selectedNode: TreeNode) => void;
  onAddClick: (node: TreeNode) => void;
  onDeleteClick: (node: TreeNode) => void;
  onUpdateClick: (node: TreeNode) => void;
  onRefresh: () => void;
  treeData?: TreeNode[];
  loading?: boolean;
  error?: any;
}

export default function SearchTree({
  renderIcon,
  onSelect,
  onAddClick,
  onDeleteClick,
  onUpdateClick,
  treeData,
  loading,
  error,
  onRefresh,
}: SearchTreeProps) {
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (newExpandedKeys: Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const findExpandedKeysBySearchText = (
    treeData: TreeNode[] = [],
    searchText: string = ""
  ): string[] => {
    const expandedKeys: string[] = [];

    const traverseTree = (nodes: TreeNode[]) => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.title.includes(searchText)) {
          expandedKeys.push(node.key);
        }
        if (node.children) {
          traverseTree(node.children);
        }
      }
    };

    traverseTree(treeData);
    return [...new Set(expandedKeys)];
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      setExpandedKeys([]);
      setSearchValue(value);
      setAutoExpandParent(false);
      return;
    }
    const expandedKeys = findExpandedKeysBySearchText(treeData, value);
    setExpandedKeys(expandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  function renderNodeTitle(item: TreeNode) {
    const index = item?.title?.indexOf(searchValue || "");
    let title;
    if (index > -1) {
      const beforeStr = item?.title?.substr(0, index);
      const afterStr = item?.title?.substr(index + searchValue.length);
      title = (
        <span>
          {beforeStr}
          <span className="text-red-500 bg-yellow-200">{searchValue}</span>
          {afterStr}
        </span>
      );
    } else {
      title = <span>{item.title}</span>;
    }

    const icon = renderIcon(item);
    function handleNodeAction(
      e: React.MouseEvent,
      type: string,
      node: TreeNode
    ) {
      e.stopPropagation();
      if (type === "add") onAddClick(node);
      if (type === "delete") onDeleteClick(node);
      if (type === "update") onUpdateClick(node);
    }
    return (
      <div
        className={
          "flex items-center justify-between w-full " + styles["node-title"]
        }
      >
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
        <div className={styles["node-title-btn"]}>
          <Button
            icon={<PlusOutlined />}
            size="small"
            onClick={(e) => handleNodeAction(e, "add", item)}
            className="mr-1"
          />
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={(e) => handleNodeAction(e, "update", item)}
            className="mr-1"
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            onClick={(e) => handleNodeAction(e, "delete", item)}
          />
        </div>
      </div>
    );
  }

  const treeContainter = useRef(null);
  const { height: maxHeight } = useMaxHeight(treeContainter);

  return (
    <div>
      <div className="flex mb-4">
        <Input
          placeholder="输入关键词查找节点..."
          onChange={onSearch}
          prefix={<SearchOutlined />}
          className="mr-2"
        />
        <Button icon={<ReloadOutlined />} onClick={onRefresh}>
          刷新
        </Button>
      </div>
      {error ? (
        <div className="flex items-center justify-center w-full h-full">
          获取错误,请刷新
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spin />
        </div>
      ) : !treeData || !treeData?.length ? (
        <div className="flex items-center justify-center w-full max-h-screen">
          树为空
        </div>
      ) : (
        <OverlayScrollbarsComponent
          ref={treeContainter}
          style={{ height: maxHeight ? maxHeight + "px" : "auto" }}
        >
          <Tree
            className="p-4"
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onSelect={(_, info) => {
              const selectedNode = info.selectedNodes[0] as TreeNode;
              onSelect(selectedNode);
            }}
            treeData={treeData}
            blockNode
            titleRender={renderNodeTitle}
          />
          <div className="h-20"></div>
        </OverlayScrollbarsComponent>
      )}
    </div>
  );
}
