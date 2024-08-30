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
import { TheTime, SearchTree } from "@tikkhun/react-ui";
function App() {
  return (
    <div>
      <TheTime></TheTime>
      <SearchTree
        renderIcon={() => <div>123</div>}
        onSelect={() => {}}
        onAddClick={() => {}}
        onDeleteClick={() => {}}
        onUpdateClick={() => {}}
        onRefresh={() => {}}
        treeData={[
          {
            key: "0",
            title: "123",
            children: [
              {
                key: "1",
                title: "222",
              },
            ],
          },
        ]}
      ></SearchTree>
    </div>
  );
}

export default App;
