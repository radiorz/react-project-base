/**
 * @author
 * @file AuthLayout.jsx
 * @fileBase AuthLayout
 * @path src\router\AuthLayout.jsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useModuleStore } from "@voerka/react";
import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const userStore = useModuleStore("user");
  const [user] = userStore.useReactive("user");
  useEffect(() => {
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`, {
        replace: true,
      });
    }
  }, []);
  return children;
}
export default AuthLayout;
