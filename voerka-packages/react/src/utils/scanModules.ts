import { t } from "../languages"

/**
* 扫描模块或页面目录中的模块
* 
* scanModules(import.meta.glob("../(modules|pages)/* /widgets.tsx",{eager:true}))
* scanModules(import.meta.glob("../(modules|pages)/* /widgets.tsx"))
* 
* 每个模块需要定义
* { id,component}或[{ id,component},{ id,component},...]
 

* @returns 
*/
export function scanModules<T extends {id:string}>(moduleFiles:object){
    let modules:Record<string,T>= {}
    for(let [id,module] of Object.entries(moduleFiles)){
       let exportedModules =  (module as any).default
       if(!exportedModules) {
            console.warn(t("模块{id}未导出任何内容",id))
            continue
       }
       exportedModules = (Array.isArray(exportedModules) ? exportedModules : [exportedModules]) as T[]
       exportedModules.forEach((module: T)=>{
                modules[module.id] = module  
       })
   }   
   return modules
} 
