import { configurable, module, Module, state, watch } from "@voerka/react";
// import { UserModule } from "../user";
@module({ observable: true })
export class UserModule extends Module {
  state = state({
    token: configurable(""),
    user: {},
  });
  onReady() {}
  get userModule() {
    // @ts-expect-error userModule 是一个模块，但是类型上没有定义
    return this.app.modules.user as UserModule;
  }
  @watch("token")
  getUser() {
    // this.user = this.
    console.log("获取用户信息");
  }
  goToLogin() {
    // 这里实际上是跳转到casdoor登录页
  }
  logout() {
    this.state.token = "";
    this.goToLogin();
  }
}
