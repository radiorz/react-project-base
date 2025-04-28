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

import { RouterProvider } from "react-router";
import { router } from "@/router";
import mqttClient from "./messageManager";
import { useEffect } from "react";
// function Navigation() {
//   useGlobalRouter();
//   return (
//     <Routes>
//       <Route path="/" element={<Home></Home>}></Route>
//       <Route path="/login" element={<Login></Login>}></Route>
//     </Routes>
//   );
// }
import MqttNotification from "@/components/MqttNotification";
import NetworkNotification from "@/components/NetworkNotification";
import { useSystemTheme } from "@tikkhun/react-ui";
import { ConfigProvider, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import { App as AntdApp } from "antd";
// import enUS from "antd/locale/en_US";
import AppProvider from "@/components/AppProvider";
function App() {
  const systemTheme = useSystemTheme();
  console.log(`系统的主题是: `, systemTheme);
  useEffect(() => {
    mqttClient.connect();
  }, []);
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: systemTheme === "dark" ? theme.darkAlgorithm : undefined,
      }}
    >
      <AntdApp>
        <AppProvider>
          {/* // 确保文字颜色正常 */}
          <MqttNotification></MqttNotification>
          <NetworkNotification></NetworkNotification>
          <RouterProvider router={router}></RouterProvider>
        </AppProvider>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
