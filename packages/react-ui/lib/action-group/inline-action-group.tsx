/**
 * @author
 * @file inline-hover-action.tsx
 * @fileBase inline-hover-action
 * @path packages\react-ui\lib\search-tree\inline-hover-action.tsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */
import { Button } from "antd";
import { useMemo, useState } from "react";
import { ActionGroupDropDown } from "./action-group-drop-down";
import { type ActionHandler, type Action } from "./action-group.interface";
export interface InlineActionGroupProps {
  // value: propTypes.any
  className?: string;
  actions?: Action[];
  primaryActionCount?: number;
  handleAction?: ActionHandler;
}

export function InlineActionGroup({
  className = "",
  actions = [],
  primaryActionCount = 3,
  handleAction,
}: InlineActionGroupProps) {
  const [open, setOpen] = useState(false);
  function _handleAction(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    type: string
  ) {
    e.stopPropagation();
    handleAction?.(type);
  }
  // Split actions
  const primaryActions = useMemo(
    () => actions.slice(0, primaryActionCount),
    [primaryActionCount, actions]
  );
  // console.log(primaryActions);
  const overflowActions = useMemo(
    () => actions.slice(primaryActionCount),
    [primaryActionCount, actions]
  );

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {primaryActions.map(({ icon, name, title }, i) => (
        <Button
          title={title}
          key={i}
          icon={icon}
          // 没有icon时，显示title
          value={!icon ? title : undefined}
          size="small"
          onClick={(e) => _handleAction(e, name)}
        />
      ))}
      {/* 更多选项藏在这里头 */}
      {overflowActions.length > 0 && (
        <ActionGroupDropDown
          actions={overflowActions}
          open={open}
          setOpen={setOpen}
          handleAction={handleAction}
        ></ActionGroupDropDown>
      )}
    </div>
  );
}
