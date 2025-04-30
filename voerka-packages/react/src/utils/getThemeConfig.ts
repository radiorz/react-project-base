import { getModule } from "@voerka/core";
import { theme } from 'antd'; 
import { VoerkaSettings } from "../modules/settings";

interface ThemeConfig {
    token: VoerkaSettings['theme'];
    algorithm: typeof theme.darkAlgorithm | typeof theme.defaultAlgorithm;
    components: {
        Layout: {
            algorithm: boolean;
            headerBg: string;
        }
    }
}
export const getThemeConfig =():ThemeConfig=>{
    const settings = getModule("settings")!.state as VoerkaSettings
    return {
        token     : settings.theme,
        algorithm : settings.theme.dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
            Layout: {
                algorithm: true,
                headerBg : settings.theme.dark ? ThemeTokens.colorBgBlur : 'white'
            }
        }
    }
}
