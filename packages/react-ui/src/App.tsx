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
import { ThreeColumnLayout, MaxHeight, TheTime } from "../lib";
function App() {
  return (
    <ThreeColumnLayout className="w-20 h-screen">
      <div className="h-screen ">Left Panel Content</div>
      <div className="h-screen ">Middle Panel Content</div>
      <div className="h-screen ">Right Panel Content</div>
    </ThreeColumnLayout>
  );
}

export default App;
