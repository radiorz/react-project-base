/**
 * @author
 * @file index.jsx
 * @fileBase Test
 * @path src\pages\Test\index.jsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { SashLayout } from "../sash-layout";
import { useWindowDimensions } from "../../window-dimensions";

function Test() {
  const { width } = useWindowDimensions(); // const
  return (
    <SashLayout
      className="w-screen h-screen"
      defaultLengths={[width / 4, width / 4, width / 4, width / 4]}
    >
      <div className="w-full h-full bg-red-400"></div>
      <div className="w-full h-full bg-green-400"></div>
      <div className="w-full h-full bg-orange-400"></div>
      <div className="w-full h-full bg-blue-400"></div>
    </SashLayout>
  );
}

export default Test;
