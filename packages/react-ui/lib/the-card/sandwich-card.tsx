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
      className={`flex flex-col transition-shadow duration-300 rounded hover:shadow-lg ${className}`}
    >
      <ActionGroupBar {...barProps} className="w-full" />
      <div className="flex-grow w-full">{children}</div>
      {footer}
    </div>
  );
};
