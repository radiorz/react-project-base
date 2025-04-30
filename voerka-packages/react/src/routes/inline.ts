/**
 * 内置路由
 */

import inlinePages from "../pages/presets"     // 内置页面
import { t } from "../languages"
 
/**
 * 导入内置页面
 */
export function importInlinePages(PageRoutes:Record<string,any>,ExternalRoutes:any[]){
    // 添加内置页面
    Object.entries(inlinePages).forEach(([url,page])=>{      
      // @ts-ignore
      if(page.external===true){
        ExternalRoutes.push(page)
      }else{   
        url = url.startsWith("/") ? url.substring(1) : url
        if(url in PageRoutes){
          logger.warn(t("页面路由与内置页面冲突：{}"),url)
        }else{
          PageRoutes[url] = page
        }
      }      
    })  
  }
   