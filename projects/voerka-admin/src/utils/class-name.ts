import { clsx } from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function mergeClassName(...inputs: ClassNameValue[]) {
  return twMerge(clsx(inputs));
}
// shadcn ~
export const cn = mergeClassName;
