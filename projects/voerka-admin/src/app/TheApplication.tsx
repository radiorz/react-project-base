import { ReactApplication, VoerkaApplicationProvider } from "@voerka/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { router } from "@/router";
import { client } from "@/api";
import { ApolloProvider } from "@apollo/client";
import { App as AntdApp } from "antd";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider, theme } from "antd";

export class TheApplication extends ReactApplication {
  router = router;
  // 应用启动时
  onCreate = () => {
    this.logger.info("项目启动");
  };
  onReady() {}
  async _renderApp() {
    const root = createRoot(document.getElementById("root")!);
    root.render(
      <StrictMode>
        <VoerkaApplicationProvider
          fallback={
            <div className="flex items-center justify-center h-screen">
              loading...
            </div>
          }
        >
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </VoerkaApplicationProvider>
      </StrictMode>
    );
  }
}
