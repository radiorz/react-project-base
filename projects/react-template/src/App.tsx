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
<<<<<<< HEAD
// import { Hello } from 'ui-tsup';
=======
>>>>>>> dde3efdbe2e694e70d5f2dd23e9aa6af3e3a0311
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
