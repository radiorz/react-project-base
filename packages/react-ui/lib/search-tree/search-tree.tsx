import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Spin, Tree } from "antd";
import { debounce } from "lodash-es";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Key, memo, useCallback, useRef, useState } from "react";
import { useMaxHeight } from "../max-height";
import { useResizeObserver } from "../resize/useResizeObserver";
import { TreeNode } from "./tree-node";
const MemorizedTreeNode = memo(TreeNode);
import { TreeNodeProps } from "./search-tree.interface";
import { findExpandedKeysBySearchText } from "./utils";
export interface SearchTreeProps {
  selectedKeys: string[];
  setSelectedKeys: Function;
  renderIcon: (item: any) => JSX.Element;
  onSelect: (selectedNode: TreeNodeProps) => void;
  nodeActions?: any[];
  handleNodeAction: (type: string, node: TreeNodeProps) => void;
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

export function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full max-h-screen max-w-screen">
      <Spin />
    </div>
  );
}
export function EmptyTip() {
  return (
    <div className="flex items-center justify-center w-full h-full max-h-screen max-w-screen">
      树为空
    </div>
  );
}
export function ErrorTip() {
  return (
    <div className="flex items-center justify-center w-full h-full max-h-screen max-w-screen">
      获取错误,请刷新
    </div>
  );
}
export function SearchTree({
  renderIcon,
  onSelect,
  handleNodeAction,
  treeData,
  loading,
  error,
  onRefresh,
}: SearchTreeProps) {
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  // 树节点展开渲染的回调
  const onExpand = (newExpandedKeys: Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  // 选择树节点
  const onSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      if (!value) {
        setExpandedKeys([]);
        setAutoExpandParent(false);
        return;
      }
      const expandedKeys = findExpandedKeysBySearchText(treeData, value);
      setExpandedKeys(expandedKeys);
      setAutoExpandParent(true);
    },
    [treeData]
  );
  // 处理树节点渲染
  const renderNodeTitle = (item: TreeNodeProps) => {
    return (
      <MemorizedTreeNode
        renderIcon={renderIcon}
        item={item}
        searchValue={searchValue}
        handleNodeAction={handleNodeAction}
      ></MemorizedTreeNode>
    );
  };
  // 处理刷新
  const treeContainer = useRef(null);
  const { dimensions } = useResizeObserver(treeContainer);
  // 底部漏出16
  const { height: maxHeight } = useMaxHeight(treeContainer, 16, dimensions);
  // console.log(`maxHeight`, maxHeight);
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
        <ErrorTip></ErrorTip>
      ) : loading ? (
        <Loading></Loading>
      ) : !treeData || !treeData?.length ? (
        <EmptyTip></EmptyTip>
      ) : (
        <div
          ref={treeContainer}
          className="flex-grow overflow-hidden bg-white rounded-md"
        >
          <OverlayScrollbarsComponent
            className="w-full h-auto"
            style={{ height: maxHeight > 0 ? maxHeight + "px" : "auto" }}
          >
            <Tree
              className="p-4 !rounded-none"
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
          </OverlayScrollbarsComponent>
        </div>
      )}
    </div>
  );
}
