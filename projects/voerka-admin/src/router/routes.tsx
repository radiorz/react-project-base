import { lazy } from "react";
import { Outlet } from "react-router";
import { AuthLayout } from "@/app/modules/user/AuthLayout";
import SuspenseLayout from "./SuspenseLayout";
import NavigateLayout from "./NavigateLayout";
import Root from "@/pages/Root";

export const routes = [
  {
    path: "/",
    element: (
      <NavigateLayout>
        <Outlet></Outlet>
      </NavigateLayout>
    ),
    children: [
      {
        path: "/",
        element: (
          // 认证与懒加载
          <AuthLayout>
            <SuspenseLayout>
              <Outlet></Outlet>
            </SuspenseLayout>
          </AuthLayout>
        ),
        children: [
          {
            path: "/",
            element: <Root></Root>,
            children: [
              {
                index: true,
                element: lazy(() => import("@/pages/Home")),
              },
            ],
          },
        ],
      },
    ],
  },
];
