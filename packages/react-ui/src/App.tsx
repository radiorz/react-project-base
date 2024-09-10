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

import { SashLayout, useWindowDimensions } from "../lib";

function Test() {
  const { height } = useWindowDimensions(); // const
  return (
    <SashLayout
      direction="vertical"
      defaultLengths={[height / 4, height / 4, height / 4, height / 4]}
    >
      <div className="w-full h-full bg-red-400"></div>
      <div className="w-full h-full bg-green-400"></div>
      <div className="w-full h-full bg-orange-400"></div>
      <div className="w-full h-full bg-blue-400"></div>
    </SashLayout>
  );
}

export default Test;
