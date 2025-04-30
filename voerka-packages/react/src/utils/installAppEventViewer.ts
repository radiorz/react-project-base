import { VoerkaApplication } from "@voerka/core";


export function installAppEventViewer(app:VoerkaApplication) {
    // @ts-ignore
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    if(!devTools){
        logger.warn("未安装Redux DevTools Extension插件")
    }    
    const store = devTools.connect();
    if(store){
        store.subscribe((message:any)=>{ 
            if(message.type=="START"){
                store.init({})
            }
        })
    }
    app.onAny((event)=>{
        devTools.send(event.type,{type:event.type,value:event})
    })
}