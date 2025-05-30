/**
 * @author
 * @file App.tsx
 * @fileBase App
 * @path packages\react-ui\src\App.tsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import React from "react";
// import TestTree from "./TestTree";
import { useSystemTheme } from "../lib";
import { SandwichCardDemo } from "../lib/the-card/sandwich-card.demo";
import SashDemo from "../lib/sash-layout/sash.demo";
import { SashVerticalDemo } from "../lib/sash-layout/demo/vertical";
import { StatusDotDemo } from "../lib/status-dot/status-dot.demo";
import { SearchTreeDemo } from "../lib/search-tree/search-tree.demo";
import { ConfigProvider, theme } from "antd";
interface AppProps {
  // value: propTypes.any
}
function App() {
  const systemTheme = useSystemTheme();
  // return <StatusDotDemo></StatusDotDemo>;
  // return <SandwichCardDemo></SandwichCardDemo>;
  // return <SashDemo></SashDemo>;
  // return <TheListDemo></TheListDemo>;
  return <SashVerticalDemo></SashVerticalDemo>;
  return (
    <ConfigProvider
      theme={{
        algorithm: systemTheme === "dark" ? theme.darkAlgorithm : undefined,
      }}
    >
      <SearchTreeDemo />
    </ConfigProvider>
  );
}

export default App;
