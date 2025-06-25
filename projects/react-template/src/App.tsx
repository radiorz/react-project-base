/**
 * @author
 * @file App.tsx
 * @fileBase App
 * @path projects\react-template\src\App.tsx
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from 'react';
import { TestTree } from "./components/TestTree";
export interface AppProps {
  // value: any
}
export const App: React.FC<AppProps> = () => {
  return (
    <div>
      {/* <Hello></Hello> */}
      <TestTree></TestTree>
    </div>
  );
};
export default App;
