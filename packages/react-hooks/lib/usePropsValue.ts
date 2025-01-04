// 主要同时满足受控与非受控的属性与监听传递
/**
 * @author
 * @file usePropsValue.ts
 * @fileBase usePropsValue
 * @path packages\react-hooks\lib\usePropsValue.ts
 * @from 
 * @desc 
 * @example
 */

import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
export interface usePropsValueOptions {
}

export const defaultusePropsValueOptions: usePropsValueOptions = {
};

export default function usePropsValue(options: Partial<usePropsValueOptions> = {}) {
  const opts = { ...defaultusePropsValueOptions, ...options };
  const [value] = useState(null);

  return {value};
}
