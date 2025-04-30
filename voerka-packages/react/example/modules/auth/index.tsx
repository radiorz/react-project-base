import { Module } from "@/app/module";
import { module } from "@voerka/core";

@module({ observable: true, id: "auth" })
export class AuthModule extends Module {
  state = {
    isAuth: false,
  };
  async onCreate() {
    const timeout = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
    console.log(`auth created`);
  }
  async onReady() {
    const timeout = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
    console.log(`auth`);
  }
}
