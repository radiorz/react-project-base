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

// import "@tikkhun/react-ui/dist/style.css";
import { TheTime, SearchTree } from "../lib";
import { useState } from "react";
import { treeData } from "./treeData";
import { addKeyToNode } from "../lib";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
const treeeData = addKeyToNode(treeData);
function App() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  console.log(`selectedKeys`, selectedKeys);
  return (
    <div className="overflow-hidden bg-slate-800">
      <TheTime></TheTime>
      <SearchTree
        nodeActionsByKey={{
          "0": [
            { icon: <PlusOutlined />, name: "addChild", title: "添加子节点" },
            { icon: <EditOutlined />, name: "update", title: "编辑节点" },
          ],
          "0-1": [],
          "0-0": [
            { icon: <PlusOutlined />, name: "addChild", title: "添加子节点" },
            { icon: <EditOutlined />, name: "update", title: "编辑节点" },
            { icon: <EditOutlined />, name: "update", title: "编辑节点" },
            { icon: <EditOutlined />, name: "update", title: "编辑节点" },
          ],
        }}
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        renderIcon={() => <div>123</div>}
        onSelect={() => {}}
        handleNodeAction={(type, node) => console.log(type, node)}
        onRefresh={() => {}}
        treeData={treeeData}
      ></SearchTree>
    </div>
  );
}

export default App;
