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
import { MutableRefObject, useEffect, useRef, useState } from "react";
export interface MaxHeightProps {
  footerHeight?: number;
  children: (height: number) => React.JSX.Element;
}
// 用来解决剩余高度问题
export function MaxHeight(props: MaxHeightProps) {
  const elRef = useRef(null);
  const { height } = useMaxHeight(elRef, props.footerHeight);
  return <div ref={elRef}>{props.children(height)}</div>;
}
export function getMaxHeight(el: HTMLElement, footerHeight = 0) {
  const rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top - footerHeight;
}

export function useMaxHeight(
  elRef: MutableRefObject<HTMLElement | null>,
  footerHeight = 0
) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (elRef.current) {
        const height = getMaxHeight(elRef.current, footerHeight);
        setHeight(height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [elRef, footerHeight]);

  return { height };
}
