import { ClassNameValue } from 'tailwind-merge';
import { cn } from '../class-name';

export const ErrorHolder: React.FC<{ className?: ClassNameValue }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full max-h-screen max-w-screen',
        className,
      )}
    >
      获取错误,请刷新
    </div>
  );
};
