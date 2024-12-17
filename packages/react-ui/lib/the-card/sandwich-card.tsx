/**
 * @author
 * @file sandwich-card.tsx
 * @fileBase sandwich-card
 * @path packages\react-ui\lib\the-card\sandwich-card.tsx
 * @from
 * @desc
 * @example
 */

import { ActionGroupBar, ActionGroupBarProps } from "../action-group";
import { cn } from "../class-name";
export interface SandwichCardProps {
  // value: propTypes.any
  barProps?: ActionGroupBarProps;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}
export const SandwichCard: React.FC<SandwichCardProps> = ({
  barProps,
  children,
  footer,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col transition-shadow duration-300 rounded hover:shadow-lg overflow-hidden",
        className
      )}
    >
      <ActionGroupBar {...barProps} />
      <div className="flex-grow">{children}</div>
      {footer}
    </div>
  );
};
