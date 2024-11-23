/**
 * @author
 * @file App.tsx
 * @fileBase App
 * @path projects\react-template\src\App.tsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import "@tikkhun/react-ui/dist/style.css";
import { SearchTree, addKeyToNode, TreeNodeProps, useSystemTheme } from "@tikkhun/react-ui";
import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { treeData } from "./treeData";
const treeeData = addKeyToNode(treeData);
function App() {
  const systemTheme = useSystemTheme();
  const [selectedKeys, setSelectedKeys] = useState([]);
  return (
    <div className="overflow-hidden bg-slate-800">
      {" "}
      <ConfigProvider
        theme={{
          algorithm: systemTheme === "dark" ? theme.darkAlgorithm : undefined,
        }}
      >
        <SearchTree
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          renderIcon={() => <div>123</div>}
          onSelect={() => {}}
          onAddClick={() => {}}
          onDeleteClick={() => {}}
          onUpdateClick={() => {}}
          onRefresh={() => {}}
          treeData={treeeData}
          handleNodeAction={function (type: string, node: TreeNodeProps): void {
            console.log(`type,node`, type, node);
          }}
        ></SearchTree>
      </ConfigProvider>
    </div>
  );
}

export default App;
