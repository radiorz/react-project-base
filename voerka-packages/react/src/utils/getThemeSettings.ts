import { getModule } from "@voerka/core";
import type { VoerkaSettings } from "../modules/settings";

export function getThemeSettings():VoerkaSettings['theme']{
  return getModule("settings")!.state["theme"] as VoerkaSettings['theme']
}