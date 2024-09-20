import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Spin, Tree } from "antd";
import { debounce } from "lodash-es";
import { Key, memo, ReactNode, useCallback, useRef, useState } from "react";
import { Action } from "../action-group/action-group.interface";
import { useMaxHeight } from "../max-height";
import { useResizeObserver } from "../resize/useResizeObserver";
import { TreeNodeProps } from "./search-tree.interface";
import { TreeNode } from "./tree-node";
import { findExpandedKeysBySearchText } from "./utils";
const MemorizedTreeNode = memo(TreeNode);
export interface SearchTreeProps {
  selectedKeys?: string[];
  setSelectedKeys?: Function;
  nodeActionsByKey?: {
    [key: string]: Action[];
  };
  renderIcon?: (item: any) => ReactNode;
  onSelect: (selectedNode: TreeNodeProps) => void;
  nodeActions?: Action[];
  handleNodeAction: (type: string, node: TreeNodeProps) => void;
  onRefresh: () => void;
  treeData?: TreeNodeProps[];
  loading?: boolean;
  error?: any;
  footHeight?: number;
  [props: string]: any; // 这里是tree的props
}
// DebounceInput
export interface DebounceInputProps {
  // searchText: string;
  className?: string;
  onSearch?: (value: string) => void;
}
export const DebounceInput = memo(
  ({ className, onSearch }: DebounceInputProps) => {
    const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onSearch?.(value);
    }, 250);
    return (
      <Input
        className={className}
        placeholder="输入关键词查找节点..."
        onChange={handleChange}
        prefix={<SearchOutlined />}
      />
    );
  }
);

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
  selectedKeys,
  setSelectedKeys,
  // 树节点相关
  renderIcon,
  nodeActionsByKey,
  nodeActions,
  handleNodeAction,
  // 树的数据
  treeData,
  // 当节点被选中
  onSelect,
  // 更新数据的状态
  loading,
  error,
  onRefresh,
  footHeight = 16, // 距离底部
  ...props
}: SearchTreeProps) {
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(false);
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
    // 某些特殊的节点需要设置不同的nodeActions
    const _nodeActions = nodeActionsByKey?.[item?.key || ""] || nodeActions;
    return (
      <MemorizedTreeNode
        nodeActions={_nodeActions}
        handleNodeAction={handleNodeAction}
        renderIcon={renderIcon}
        item={item}
        searchValue={searchValue}
      ></MemorizedTreeNode>
    );
  };
  // 处理刷新
  const treeContainer = useRef(null);
  const { dimensions } = useResizeObserver(treeContainer);
  // 底部漏出16
  const { height: maxHeight } = useMaxHeight(
    treeContainer,
    footHeight,
    dimensions
  );
  // console.log(`maxHeight`, maxHeight);
  return (
    <div className="@container">
      <div
        className={
          "flex gap-2 mb-4 flex-wrap @[300px]:!flex-nowrap justify-between @container"
        }
      >
        <DebounceInput
          // searchText={searchValue}
          className="!w-full flex-grow" // 本来不需要w-full的 但是不知道为什么在实际项目上就不起作用flex-grow。。。
          onSearch={onSearch}
        ></DebounceInput>
        <Button
          icon={<ReloadOutlined />}
          onClick={onRefresh}
          className="!w-full @[300px]:!w-auto"
        >
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
          className="flex-grow overflow-hidden rounded-md"
        >
          <Tree
            {...props} // 更多属性直接放这里让你直接
            selectedKeys={selectedKeys}
            // 这个32是padding...
            height={maxHeight - 32 > 0 ? maxHeight - 32 : undefined}
            className="p-4 bg-white dark:bg-black !rounded-md"
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onSelect={(selectedKeys, info) => {
              setSelectedKeys?.(selectedKeys);
              const selectedNode = info.selectedNodes[0] as TreeNodeProps;
              onSelect(selectedNode);
            }}
            treeData={treeData}
            blockNode
            titleRender={renderNodeTitle}
          />
        </div>
      )}
    </div>
  );
}
