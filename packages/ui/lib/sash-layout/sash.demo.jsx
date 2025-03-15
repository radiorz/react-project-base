/**
 * @author
 * @file SashDemo.jsx
 * @fileBase SashDemo
 * @path packages\react-ui\lib\sash-layout\demo\SashDemo.jsx
 * @from
 * @desc
 * @example
 */

import Sash from "./sash";
SashDemo.propTypes = {
  // value: propTypes.any
};
function SashDemo() {
  return (
    <div className="w-screen h-screen">
      <Sash className="h-screen"></Sash>
    </div>
  );
}

export default SashDemo;
