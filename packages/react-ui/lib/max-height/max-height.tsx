/**
 * @author
 * @file TheResize.tsx
 * @fileBase TheResize
 * @path packages\react-ui\lib\components\TheResize.tsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */
import { ReactNode, useRef } from "react";
import { useMaxHeight } from "./useMaxHeight";
export interface MaxHeightProps {
  footerHeight?: number;
  children: (height: number) => ReactNode;
}
// 用来解决剩余高度问题
export function MaxHeight(props: MaxHeightProps) {
  const elRef = useRef(null);
  const { height } = useMaxHeight(elRef, props.footerHeight);
  return <div ref={elRef}>{props.children(height)}</div>;
}
