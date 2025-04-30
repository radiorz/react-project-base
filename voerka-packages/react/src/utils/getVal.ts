import { getMapVal } from "./getMapVal";
import { isMap } from "./isMap";

export function getVal(obj: any, keyPath: string[] | undefined, defaultValue: any = undefined): any {
    if(!keyPath) return obj
    if(keyPath.length === 0) return obj
    let val;
    let parent = obj;
    try{
      keyPath.forEach((key) => { 
        if(isMap(parent)){
          val = getMapVal(parent, key)
        }else{
          if(key in parent){
            val = parent[key]
          }else{
            throw new Error(`invalid keypath: ${keyPath.join(".")}`)
          }        
        } 
        parent = val     
      });    
    } catch{
      return defaultValue;
  }
    return val;
}


 