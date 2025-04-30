import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ReactApplication, VoerkaApplicationProvider, useSettings, useApp, useModule } from '../src'
import './modules'
import { ThemeModule, AuthModule } from './modules'
import { UseEventDemo } from './demos/hooks/useEvent.demo'
import { UseModuleDemo } from './demos/hooks/useModule.demo'
import { UseSettingsDemo } from './demos/hooks/useSettings.demo'
import UseAppDemo from './demos/contexts/useApp.demo'
import { UseModuleStoreDemo } from './demos/hooks/useModuleStore.demo'

// class MyApp extends ReactApplication {
//     static settings = {
//         theme: {
//             dark: true,
//         },
//     }
// }
const app = new ReactApplication({
    settings: {
        theme: {
            dark: true,
        },
    },
})
app.start({
    onCreate() {
        ;(globalThis as any).$app = app
        render()
    },
}).catch((err) => logger.debug(`err.message`, err.message))

async function render() {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <VoerkaApplicationProvider fallback={<>loading...</>}>
                <UseAppDemo></UseAppDemo>
                <UseSettingsDemo></UseSettingsDemo>
                <App></App>
                <UseModuleDemo></UseModuleDemo>
                <UseEventDemo></UseEventDemo>
                <UseModuleStoreDemo></UseModuleStoreDemo>
            </VoerkaApplicationProvider>
        </StrictMode>,
    )
}
