/**
 * @author
 * @file App.jsx
 * @fileBase App
 * @path src\App.jsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { router } from "@/router";
import { RouterProvider } from "react-router";
// import MqttNotification from "@/components/MqttNotification";
// import NetworkNotification from "@/components/NetworkNotification";
// import { AppProvider } from "@/components/AppProvider";
import { useSystemTheme } from "@tikkhun/react-ui";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
// import enUS from "antd/locale/en_US";
function App() {
  const systemTheme = useSystemTheme();
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: systemTheme === "dark" ? theme.darkAlgorithm : undefined,
      }}
    >
      <AntdApp>
        {/* <AppProvider> */}
          {/* // 确保文字颜色正常 */}
          {/* <MqttNotification></MqttNotification>
          <NetworkNotification></NetworkNotification> */}
          <RouterProvider router={router}></RouterProvider>
        {/* </AppProvider> */}
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
