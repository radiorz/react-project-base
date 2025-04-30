/**
 * @author
 * @file useModuleStore.ts
 * @fileBase useModuleStore
 * @path packages\react\src\hooks\useModuleStore.ts
 * @from
 * @desc
 * @example
 */

import { Module } from "../app/module";
import { useModule } from "./useModule";
// import { useDispatch } from "react-redux";
export interface useModuleStoreOptions {}

export function useModuleStore<T extends Module = Module>(
  name: string,
  keyPath: string
) {
  const module = useModule<T>(name);
  console.log(`module`, module)
  return module.store as T["store"];
}
export default useModuleStore;
