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
import { TheTime, MaxHeight } from "../lib";

function App() {
  return (
    <>
      <TheTime></TheTime>
      <MaxHeight>
        {(height) => {
          return (
            <div style={{ height: height + "px", background: "green" }}></div>
          );
        }}
      </MaxHeight>
    </>
  );
}

export default App;
