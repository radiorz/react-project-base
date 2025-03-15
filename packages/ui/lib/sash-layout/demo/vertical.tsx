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

export function SashVerticalDemo() {
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

