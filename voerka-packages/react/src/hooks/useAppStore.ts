import { useApp } from "@/contexts";

/**
 * @function useAppStore
 * @description 函数用于
 * @param
 * @returns
 * @example
 * useAppStore() // ->
 */
export function useAppStore() {
  return useApp().store;
}
