/**
 * @author
 * @file UserLayout.tsx
 * @fileBase UserLayout
 * @path projects\web-client\src\router\UserLayout.tsx
 * @from
 * @desc 当有用户时，渲染子组件，否则跳转到登录页
 * @example
 */

import { useModuleStore } from "@voerka/react";
import { useNavigate } from "react-router";
export interface UserLayoutProps {
  children: React.ReactNode;
}
export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const userStore = useModuleStore("user");
  const [user] = userStore.useReactive("user");
  const navigate = useNavigate();
  if (!user) {
    // 这里需要改一下,因为认证方式变了
    // navigate("/login");
  }
  return children;
};

// 默认导出
export default UserLayout;
