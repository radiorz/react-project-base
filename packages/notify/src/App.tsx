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

import React, { useEffect } from "react";
// import { NotifyContainer, useNotify, notify } from "../lib";
import { NotifyContainer } from '../lib/NotifyContainer';
const NotifyContainer =

function App() {
  const notify = useNotify();
  useEffect(() => {
    const notifyInstance = notify((n) => {
      return <div>我是一个n</div>;
    });
    notifyInstance.close() 
  });
  return (
    <div>
      <NotifyContainer />
    </div>
  );
}

export default App;
