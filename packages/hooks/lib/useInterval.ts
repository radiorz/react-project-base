/**
 * @author
 * @file useInterval.js
 * @fileBase useInterval
 * @path packages\react-hooks\useInterval.js
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useCallback, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
import { isNumber } from "@tikkhun/utils-core";
export interface UseIntervalOptions {
  callback: (...args: any[]) => void;
  interval: number;
  immediate: boolean;
}
export const USE_INTERVAL_DEFAULT_OPTIONS: UseIntervalOptions = {
  callback: () => {},
  interval: 1000,
  immediate: false,
};
export function useInterval(options: Partial<UseIntervalOptions>) {
  const { callback, interval, immediate } = Object.assign(
    USE_INTERVAL_DEFAULT_OPTIONS,
    options
  );
  const intervalIdRef = useRef<number | null>(null);
  // 清除函数
  const clear = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  }, []);
  // 定时逻辑
  useEffect(() => {
    // 判断传入参数是否正确
    if (!isNumber(interval) || interval < 0) {
      // 开发模式下就报错
      return;
    }
    // 立即执行
    if (immediate) {
      callback();
    }
    // 定时执行
    intervalIdRef.current = window.setInterval(() => {
      callback();
    }, interval);

    return clear;
  }, [interval, immediate]);
  // 返回清除函数
  return { clear };
}
