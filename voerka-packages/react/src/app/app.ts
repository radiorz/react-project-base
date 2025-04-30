import { BrowserApplication } from '@voerka/browser'
import { createStore } from '@autostorejs/react' 
export class ReactApplication extends BrowserApplication {
    onBootstrap() {
        console.log('VoerkaApplication for React')
    }
    onMakeObservable(state:any) {
        // 创建store
        return createStore(state,{
            debug:this.debug
        })
    } 
}
