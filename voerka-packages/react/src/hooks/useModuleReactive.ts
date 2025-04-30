/**
 * @author
 * @file useModuleReactive.ts
 * @fileBase useModuleReactive
 * @path packages\react\src\hooks\useModuleReactive.ts
 * @from
 * @desc
 * @example
 */

import { Module } from '../app/module';
import useModuleStore from './useModuleStore';
export default function useModuleReactive<TheModule extends Module = Module>(
  moduleName: string,
  selector: any,
) {
  const moduleStore = useModuleStore<TheModule>(moduleName);
  return moduleStore.useReactive(selector);
}
