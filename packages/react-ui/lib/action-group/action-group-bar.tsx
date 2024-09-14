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
  // value: propTypes.any
  renderTitle?: () => ReactNode;
  className?: string;
}
export const ActionGroupBar: React.FC<ActionGroupBarProps> = ({
  renderTitle,
  actions,
  handleAction,
  primaryActionCount,
  className = "",
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
