import { MutableRefObject, useEffect, useState } from "react";
export function getMaxHeight(el: HTMLElement, footerHeight = 0): number {
  const rect = el?.getBoundingClientRect?.();
  return window.innerHeight - (rect?.top || 0) - footerHeight;
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
