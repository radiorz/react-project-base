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
import { MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useState, useMemo } from "react";
import { type Action } from "./action-group.interface";
import { ActionGroupDropDown } from "./action-group-drop-down";
interface InlineHoverActionProps {
  // value: propTypes.any
  className?: string;
  actions: Action[];
  primaryActionCount?: number;
  handleAction?: Function;
}
export function InlineActionGroup({
  className = "",
  actions = [],
  primaryActionCount = 3,
  handleAction,
}: InlineHoverActionProps) {
  const [open, setOpen] = useState(false);
  function _handleAction(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    type: string
  ) {
    e.stopPropagation();
    handleAction?.(type);
    setOpen(false);
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
      {primaryActions.map(({ icon, name }, i) => (
        <Button
          key={i}
          icon={icon}
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
