import { ReactAutoStore } from '@autostorejs/react'

export {}
declare module '@voerka/core' {
    interface IModule {
        store: ReactAutoStore<any>
    }
    // interface ModuleBase {
    //     store: ReactAutoStore<any>
    // }
}
