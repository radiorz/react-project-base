import { lazy } from "react";
import { Outlet } from "react-router";
import AuthLayout from "./layout/AuthLayout";
import SuspenseLayout from "./SuspenseLayout";
import NavigateLayout from "./NavigateLayout";

export const routes = [
  {
    path: "/",
    element: (
      <NavigateLayout>
        <Outlet></Outlet>
      </NavigateLayout>
    ),
  },
];
