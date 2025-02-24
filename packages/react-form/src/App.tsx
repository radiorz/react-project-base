/**
 * @author
 * @file App.tsx
 * @fileBase App
 * @path packages\react-form\src\App.tsx
 * @from
 * @desc
 * @example
 */

import { UseStringInputDemo } from "../lib/useStringInput.demo";
export interface AppProps {
  // value: any
}
export const App: React.FC<AppProps> = () => {
  return (
    <div>
      123
      <UseStringInputDemo />
    </div>
  );
};

// 默认导出
export default App;
