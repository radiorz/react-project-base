/**
 * @author
 * @file useMount.js
 * @fileBase useMount
 * @path packages\react-hooks\useMount.js
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useEffect } from "react";
// import { useDispatch } from "react-redux";

export function useMount(fn: () => void) {
  useEffect(() => {
    fn();
  }, []);
}
