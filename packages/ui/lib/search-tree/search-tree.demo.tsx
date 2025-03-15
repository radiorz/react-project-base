/**
 * @author
 * @file SearchTreeDemo.tsx
 * @fileBase SearchTreeDemo
 * @path projects\react-template\src\SearchTreeDemo.tsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { SearchTree } from "./search-tree";
import { useState } from "react";
import treeData from "./tree.consts.json" 
import { addKeyToNode } from "../index";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
const treeeData = addKeyToNode(treeData);
export function SearchTreeDemo() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  console.log(`selectedKeys`, selectedKeys);
  return (
    <div className="overflow-hidden bg-slate-800">
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

export default SearchTreeDemo;
