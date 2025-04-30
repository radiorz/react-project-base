/**
 * @author
 * @file module-layout.tsx
 * @fileBase module-layout
 * @path packages\react\src\contexts\module-layout.tsx
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from "react";
export interface ModuleLayoutProps {
  // value: any
}
export function useModuleReady(name: string) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return ready;
}
export const ModuleLayout: React.FC<ModuleLayoutProps> = () => {
  return <div>ModuleLayout</div>;
};

// 默认导出
export default ModuleLayout;
