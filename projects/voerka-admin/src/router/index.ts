/**
 * @function fun
 * @description 函数用于
 * @param
 * @returns
 * @example
 * fun() // ->
 */
import { routes } from "@/router/routes";
import { createBrowserRouter } from "react-router";
// export enum RouterType {
//   Browser = "browser",
//   Memory = "memory",
// }
const options = {
  
}
export const router = createBrowserRouter(routes, {
  basename: "/",
  ...options,
});
