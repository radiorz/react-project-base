/**
 * @author
 * @file select-integer.ts
 * @fileBase select-integer
 * @path packages\reactive-form\lib\integer\select-integer.ts
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from "react";
export interface SelectIntegerProps {
  // value: any
}
export const SelectInteger: React.FC<SelectIntegerProps> = () => {
  return (
    <div>
      <select>
        <option value="1">1</option>
      </select>
    </div>
  );
};

// 默认导出
export default SelectInteger;
