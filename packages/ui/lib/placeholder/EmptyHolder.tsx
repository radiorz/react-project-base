/**
 * @author
 * @file EmptyHolder.tsx
 * @fileBase EmptyHolder
 * @path packages\ui\lib\placeholder\EmptyHolder.tsx
 * @from
 * @desc
 * @example
 */

import { ClassNameValue } from 'tailwind-merge';
import { cn } from '../class-name';

export interface EmptyHolderProps {
  message: string;
  // icon: any;
  className?: ClassNameValue;
}
export const EmptyHolder: React.FC<EmptyHolderProps> = ({
  // icon,
  message,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full max-h-screen max-w-screen',
        className,
      )}
    >
      {/* {icon} */}
      {message ?? '数据为空'}
    </div>
  );
};

// 默认导出
export default EmptyHolder;
