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
import { TheTime, SearchTree, addKeyToNode } from "@tikkhun/react-ui";
import { useState } from "react";
import { treeData } from "./treeData";
const treeeData = addKeyToNode(treeData);
function App() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  return (
    <div className="overflow-hidden bg-slate-800">
      <TheTime></TheTime>
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
      ></SearchTree>
    </div>
  );
}

export default App;
