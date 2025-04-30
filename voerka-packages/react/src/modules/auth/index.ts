/**
 *
 * 字典模块
 *
 * 管理应用的字典数据
 *
 */
import { module } from "@voerka/core";
import cookie from "js-cookie";
import { Module } from "../../app/module";
export class AuthModule extends Module {
  state = {
    loginUrl: "/login/#/",
    isLogin: true,
  };
  // checkIsLogin() {
  //     return !!cookie.get('jwt')
  // }
  goToLogin() {
    window.location.href =
      this.state.loginUrl + "?redirect=" + window.location.href;
  }
  logout() {
    cookie.remove("jwt");
    this.goToLogin();
  }
}
