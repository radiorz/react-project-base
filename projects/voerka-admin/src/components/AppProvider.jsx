/**
 * @author
 * @file AppProvider.jsx
 * @fileBase AppProvider
 * @path src\components\AppProvider.jsx
 * @from
 * @desc
 * @example
 */

import useEventbus from "@/hooks/useEventbus";
import { App } from "antd";
export function AppProvider({ children }) {
  const { message, notification } = App.useApp();
  // 通过eventbus传入具体参数 实现message主题化
  useEventbus("message", ({ action, options }) => {
    message[action]?.(options);
  });
  useEventbus("notification", ({ action, options }) =>
    notification[action]?.(options)
  );
  return <>{children}</>;
}
