/**
 * @author
 * @file LockCheckLayout.jsx
 * @fileBase LockCheckLayout
 * @path src\router\LockCheckLayout.jsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
export interface LockCheckLayoutProps {
  lockPath: string;
  checkValid: () => boolean;
  children: React.ReactNode;
}
export const LockCheckLayout: React.FC<LockCheckLayoutProps> = ({
  lockPath = "/lock",
  checkValid,
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(`1111111111`,1111111111)
    // 路由变化时检查 token
    const isValid = !checkValid();
    // console.log(`isValid`, isValid);
    if (isValid) {
      // 如果 token 无效，重定向到登录页
      // replace: true 选项是用来替换当前的页面记录，防止用户使用浏览器的后退按钮返回到当前页面
      navigate(
        `${lockPath}?redirect=${encodeURIComponent(location.pathname)}`,
        {
          replace: true,
        }
      );
    }
  }, [location, navigate]);
  return children;
};

// 默认导出
export default LockCheckLayout;
