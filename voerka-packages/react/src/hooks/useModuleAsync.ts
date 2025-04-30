/**
 *
 * 访问模块配置状态的方法
 *
 *  - 访问模块配置
 * let [ state, update ]  = useModule<App,string>("app")
 *  update((state)=>{
 *      state.xxxx
 *  })
 *
 *  - 访问模块配置的局部状态
 *
 * let [ theme,update ] = useModule<App,Theme>("app",(state)=>{
 *    return state.theme
 * })
 *
 * update((state)=>{
 *   state.xxxxx  = 'xxx'
 *   return 'xxx'  // 返回值将作为新的配置值
 *   return undefined // 不更新
 * })
 *
 *
 */

import { getModule } from "@voerka/core";
import { t } from "../languages";
import { Module } from "../app";
import { Ref, useEffect, useRef } from "react";
/**
 *
 * @param name  模块名称
 * @param selector  选择器
 */
export function useModuleAsync<T extends Module = Module>(
  name: string
): Ref<T> {
  const moduleRef = useRef<T | null>(null);
  useEffect(() => {
    async function getAndSetModule() {
      const module = (await getModule(name)) as T;
      if (!module) {
        throw new Error(`module_not_found,module name =${name}`);
      }
      moduleRef.current = module;
    }
    getAndSetModule();
  }, []);
  return moduleRef;
}
