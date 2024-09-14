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

import { useState, useEffect, memo } from "react";
// import TestTree from "./TestTree";
import Horizontal from "../lib/sash-layout/demo/horizontal";
import TheListDemo from "../lib/the-list/demo";
import "../lib/index.css";
import SashDemo from "../lib/sash-layout/demo/SashDemo";
interface Props {
  // value: propTypes.any
}
function App() {
  return <SashDemo></SashDemo>;
  return <TheListDemo></TheListDemo>;
  // return <Horizontal></Horizontal>;
  // return <TestTree />;
}

export default App;
