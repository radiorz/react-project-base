import { module, Module } from "../../../src";
import { type IAppEvent, listen, watch } from "@voerka/core";
@module({ observable: true, id: "theme" })
export class ThemeModule extends Module {
  state = {
    dark: false,
    cssVariables: {
      "--primary-color": "1890ff",
      "--link-color": "1890ff",
    },
  };
  @watch("cssVariables")
  onStateChange(state: any) {
    console.log(`this.state`, JSON.stringify(state));
  }
  @listen("ready")
  onEvent(event: IAppEvent) {
    console.log(`ready event`, JSON.stringify(event));
  }
}
