import { Dict, updateModuleState } from "@voerka/core"; 


export function updateSettings(values:Dict):void
export function updateSettings(path:string,value:any):void 
export function updateSettings(...args:any[]):void{
    // @ts-ignore
    updateModuleState("settings",...args)
} 
