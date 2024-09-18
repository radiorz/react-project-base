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
import "../lib/index.css";
import { SandwichCardDemo } from "../lib/the-card/sandwich-card.demo";
interface AppProps {
  // value: propTypes.any
}
function App() {
  return <SandwichCardDemo></SandwichCardDemo>;
  // return <SashDemo></SashDemo>;
  // return <TheListDemo></TheListDemo>;
  // return <Horizontal></Horizontal>;
  // return <TestTree />;
}

export default App;
