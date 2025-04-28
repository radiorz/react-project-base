/**
 * @author
 * @file NavigateLayout.tsx
 * @fileBase NavigateLayout
 * @path projects\web-client\src\router\NavigateLayout.tsx
 * @from
 * @desc
 * @example
 */

import { eventbus } from "@/eventbus";
import * as EVENTS from "@/eventbus/events";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
export interface NavigateLayoutProps {
  children: ReactNode;
}
export const NavigateLayout: React.FC<NavigateLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    function navigateTo(options: any) {
      navigate(options.to, options.options);
    }
    eventbus.on(EVENTS.NAVIGATE, navigateTo);
    return () => {
      eventbus.off(EVENTS.NAVIGATE, navigateTo);
    };
  }, []);
  return children;
};
export default NavigateLayout;
