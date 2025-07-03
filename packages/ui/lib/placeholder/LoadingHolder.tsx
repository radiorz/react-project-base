/**
 * @author
 * @file Loading.tsx
 * @fileBase Loading
 * @path packages\ui\lib\placeholder\Loading.tsx
 * @from
 * @desc
 * @example
 */

import { Spin } from 'antd';
import { cn } from '../class-name';
import { ClassNameValue } from 'tailwind-merge';
export interface LoadingProps {
  className?: ClassNameValue;
}
export const LoadingHolder: React.FC <LoadingProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full max-h-screen max-w-screen',
        className,
      )}
    >
      <Spin />
    </div>
  );
};

// 默认导出
export default LoadingHolder;
