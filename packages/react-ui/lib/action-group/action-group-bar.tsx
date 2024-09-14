/**
 * @author
 * @file the-bar.tsx
 * @fileBase the-bar
 * @path packages\react-ui\lib\the-bar\the-bar.tsx
 * @from
 * @desc
 * @example
 */

import { ReactNode } from "react";
import { InlineActionGroup, InlineActionGroupProps } from ".";
export interface ActionGroupBarProps
  extends Omit<InlineActionGroupProps, "className"> {
  className?: string;
  // value: propTypes.any
  renderTitle?: () => ReactNode;
}
export const ActionGroupBar: React.FC<ActionGroupBarProps> = ({
  className = "",
  renderTitle,
  actions,
  handleAction,
  primaryActionCount,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-between p-2 ${className}`}
    >
      {renderTitle?.()}
      <div className="flex-grow"></div>
      <InlineActionGroup
        primaryActionCount={primaryActionCount}
        actions={actions}
        handleAction={handleAction}
      ></InlineActionGroup>
    </div>
  );
};
