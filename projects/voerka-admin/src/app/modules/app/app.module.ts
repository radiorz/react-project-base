import { module, Module, state } from "@voerka/react";
@module({ observable: true })
export class AppModule extends Module {
  state = state({
    title: "远程探视",
  });
}
