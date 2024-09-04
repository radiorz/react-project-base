import { MutableRefObject, useEffect, useState } from "react";
import { getMaxHeight } from "./getMaxHeight";

export function useMaxHeight(
  elRef: MutableRefObject<HTMLElement | null>,
  footerHeight = 0,
  forceKey: any
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
  }, [elRef, footerHeight, forceKey]);

  return { height };
}
