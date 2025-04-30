import { alovaInstance } from "@/api/alovaInstance";
import { configurable, module, Module, watch, state } from "@voerka/react";
@module({ id: "app" })
export class AppModule extends Module {
  state = state({
    entryButtonPosition: configurable("bottom-right"), // 这是位置 如果全局的则没有
    title: configurable("远程探视系统"), // 这个可以申请
    // lastVersion: configurable(""), // 这个可以申请
    baseURL: configurable("/api"),
    // plugin: configurable(false),
    // rootId: configurable("voerka-phone"),
    // cssPath: configurable("./index.css"),
  });
  onReady(): void | Promise<void> {
    this.updateBaseURL();
  }
  @watch("baseURL")
  updateBaseURL() {
    logger.debug("更新baseURL, baseURL={}", this.state.baseURL);
    alovaInstance.options.baseURL = this.state.baseURL;
  }
}
