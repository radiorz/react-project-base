import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Spin, Tree } from "antd";
import { debounce } from "lodash-es";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Key, useRef, useState, memo, useCallback } from "react";
import { useMaxHeight } from "../max-height";
import { useResizeObserver } from "../resize/useResizeObserver";
export interface TreeNodeProps {
  key?: string;
  title?: string;
  children?: TreeNodeProps[];
  icon?: string;
  parentKey?: string;
}

export interface SearchTreeProps {
  selectedKeys: string[];
  setSelectedKeys: (selectedKeys: string[]) => void;
  renderIcon: (item: any) => JSX.Element;
  onSelect: (selectedNode: TreeNodeProps) => void;
  onAddClick: (node: TreeNodeProps) => void;
  onDeleteClick: (node: TreeNodeProps) => void;
  onUpdateClick: (node: TreeNodeProps) => void;
  onRefresh: () => void;
  treeData?: TreeNodeProps[];
  loading?: boolean;
  error?: any;
}
export interface DebounceInputProps {
  // searchText: string;
  onSearch: (value: string) => void;
}
export const DebounceInput = memo(({ onSearch }: DebounceInputProps) => {
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  }, 250);
  return (
    <Input
      placeholder="输入关键词查找节点..."
      onChange={handleChange}
      prefix={<SearchOutlined />}
    />
  );
});

const findExpandedKeysBySearchText = (
  treeData: any[] = [],
  searchText: string = ""
) => {
  const expandedKeys: string[] = [];

  const traverseTree = (nodes: TreeNodeProps[]) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node?.title?.includes(searchText) && node?.parentKey) {
        expandedKeys.push(node?.parentKey);
      }
      if (node.children) {
        traverseTree(node.children);
      }
    }
  };

  traverseTree(treeData);
  return [...new Set(expandedKeys)];
};
export function SearchTree({
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

  const onSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      if (!value) {
        setExpandedKeys([]);
        setAutoExpandParent(false);
        return;
      }
      console.log(`value`, value);
      const expandedKeys = findExpandedKeysBySearchText(treeData, value);
      console.log(`expandedKeys`, expandedKeys);
      setExpandedKeys(expandedKeys);
      setAutoExpandParent(true);
    },
    [treeData]
  );

  const renderNodeTitle = (item: TreeNodeProps) => {
    const index = item?.title?.indexOf(searchValue || "");
    let title;
    if (typeof index !== "undefined" && index > -1) {
      const beforeStr = item?.title?.substring(0, index);
      const afterStr = item?.title?.substring(index + searchValue.length);
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
      node: TreeNodeProps
    ) {
      e.stopPropagation();
      if (type === "add") onAddClick(node);
      if (type === "delete") onDeleteClick(node);
      if (type === "update") onUpdateClick(node);
    }
    return (
      <div className="flex items-center justify-between w-full group">
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
        <div className="hidden group-hover:block">
          {/* 父元素出发显示 */}
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
  };

  const treeContainer = useRef(null);
  const { dimensions } = useResizeObserver(treeContainer);
  const { height: maxHeight } = useMaxHeight(treeContainer, 0, dimensions);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <DebounceInput
          // searchText={searchValue}
          onSearch={onSearch}
        ></DebounceInput>
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
        <div ref={treeContainer} className="flex-grow bg-white rounded-md">
          <OverlayScrollbarsComponent
            style={{ height: maxHeight ? maxHeight + "px" : "auto" }}
          >
            <Tree
              className="p-4"
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onSelect={(_, info) => {
                const selectedNode = info.selectedNodes[0] as TreeNodeProps;
                onSelect(selectedNode);
              }}
              treeData={treeData}
              blockNode
              titleRender={renderNodeTitle}
            />
            <div className="h-20"></div>
          </OverlayScrollbarsComponent>
        </div>
      )}
    </div>
  );
}
