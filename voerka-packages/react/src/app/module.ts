import { ReactAutoStore } from '@autostorejs/react'
import { Dict, IModuleHooks, ModuleBase, ModuleHooks } from '@voerka/core'

export class Module extends ModuleBase {
    get store(): ReactAutoStore<typeof this.state> {
        return super.store as ReactAutoStore<typeof this.state>
    }
    set store(v: ReactAutoStore<typeof this.state>) {
        super.store = v
    }
}
