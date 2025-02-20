import { useMemo } from "react";
import { getCornerClassName } from "./getCornerClassName";

export function useCorner(position: string) {
  return useMemo(() => {
    return getCornerClassName(position);
  }, [position]);
}
