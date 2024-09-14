/**
 * @author
 * @file index.jsx
 * @fileBase demo
 * @path packages\react-ui\lib\great-list\demo\index.jsx
 * @from
 * @desc
 * @example
 */
/**
 * # TODO
 * - 定义了一个简单的list 范式
 * # DONE
 * ## 20240914 星期六
 * # FUTURE
 */

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { TheList } from "../the-list";

const actions = [
  { icon: <PlusOutlined />, name: "addChild", title: "添加子节点" },
  { icon: <EditOutlined />, name: "update", title: "编辑节点" },
  { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
  { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
  { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
  { icon: <DeleteOutlined />, name: "delete", title: "删除节点" },
];
const items = [
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "2",
  },
  {
    name: "2",
  },
  {
    name: "2",
  },
  {
    name: "2",
  },
  {
    name: "2",
  },
  // {
  //   name: "2",
  // },
  // {
  //   name: "2",
  // },
];
function demo() {
  return (
    <div className="w-screen h-screen">
      <TheList
        renderTitle={() => <div>123</div>}
        actions={actions}
        handleAction={(type) => {
          console.log(type);
        }}
        items={items}
        renderItem={({ item, index }) => {
          return (
            <div key={index} className="w-full @md:w-1/2  h-36 p-2">
              <div className="w-full h-full bg-red-500 rounded">
                {JSON.stringify(item)}
              </div>
            </div>
          );
        }}
      ></TheList>
    </div>
  );
}

export default demo;
