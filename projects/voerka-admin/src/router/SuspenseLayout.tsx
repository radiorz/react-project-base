import { ReactNode, Suspense } from "react";

/**
 * @author
 * @file SuspenseLayout.tsx
 * @fileBase SuspenseLayout
 * @path packages\calling-client-sdk\lib\router\SuspenseLayout.tsx
 * @from
 * @desc
 * @example
 */

export interface SuspenseLayoutProps {
  children: ReactNode;
}
export const SuspenseLayout: React.FC<SuspenseLayoutProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          loading...
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseLayout;
