/**
 * @author
 * @file TestTree.tsx
 * @fileBase TestTree
 * @path projects\react-template\src\components\TestTree.tsx
 * @from
 * @desc
 * @example
 */

import { Tree } from "antd";
export interface TestTreeProps {
  // value: any
}
import treeData from "./tree.consts.json";
export const TestTree: React.FC<TestTreeProps> = () => {
  const maxHeight = 800;

  return (
    <Tree
      // 这个32是padding...
      height={maxHeight}
      className="p-4 bg-white dark:bg-black !rounded-md"
      treeData={treeData}
      blockNode
      titleRender={(item) => <div>{item?.title}</div>}
    />
  );
};
