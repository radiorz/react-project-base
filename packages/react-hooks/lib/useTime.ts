/**
 * @author
 * @file useTime.js
 * @fileBase useTime
 * @path packages\react-hooks\useTime.js
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useInterval } from "./useInterval";
export interface UseTimeOptions {
  interval: number;
}
export const defaultUseTimeOptions: UseTimeOptions = {
  interval: 500,
};
export function useTime(options?: Partial<UseTimeOptions>) {
  const { interval } = Object.assign(defaultUseTimeOptions, options);
  const [currentTime, setCurrentTime] = useState(new Date());
  useInterval({
    callback: () => {
      setCurrentTime(new Date());
    },
    interval,
  });
  return { currentTime };
}
