export function printAppInfo() {
  // @ts-expect-error Unreachable code error
  console.log(`__APP_NAME__`, __APP_NAME__); // 打印应用名称
  // @ts-expect-error Unreachable code error
  console.log(`__APP_VERSION__`, __APP_VERSION__); // 打印应用版本
  // @ts-expect-error Unreachable code error
  console.log(`__APP_VERSION_TAG__`, __APP_VERSION_TAG__); // 打印应用版本名称
  // @ts-expect-error Unreachable code error
  console.log(`__APP_BUILD_TIME__`, __APP_BUILD_TIME__); // 打印应用编译开始
}
