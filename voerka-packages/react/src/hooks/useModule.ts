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
import { useEffect, useRef } from "react";
/**
 *
 * @param name  模块名称
 * @param selector  选择器
 */
export function useModule<T extends Module = Module>(name: string): T {
  // const moduleRef= useRef<T| null>(null)
  // useEffect(() => {
  //   async function init(name: string) {
  //     return await getModule(name);
  //   }
  //   init(name).then((module) => {
  //     moduleRef.current = module as T
  //   });
  //   return () => {
  //     // moduleRef.current = null
  //   };
  // }, []);
  const module = getModule(name) as T;
  if (!module) {
    throw new Error(t("模块<{name}>不存在或没有加载", name));
  }
  return module;
}
