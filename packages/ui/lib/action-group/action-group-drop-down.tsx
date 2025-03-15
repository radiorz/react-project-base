/**
 * @author
 * @file context-menu-action-group.tsx
 * @fileBase context-menu-action-group
 * @path packages\react-ui\lib\action-group\context-menu-action-group.tsx
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
import { type Action, type ActionHandler } from "./action-group.interface";
export interface ActionGroupMenuProps {
  className?: string;
  actions: Action[];
  handleAction?: ActionHandler;
  children?: any;
  open: boolean;
  setOpen: any;
}
export const ActionGroupDropDown: React.FC<ActionGroupMenuProps> = ({
  actions,
  handleAction,
  className,
  children = <Button icon={<MenuOutlined />} size="small" />,
  open,
  setOpen,
}) => {
  function _handleAction(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    item: Action
  ) {
    e.stopPropagation();
    handleAction?.(item.name);
    setOpen(false);
  }
  const items = actions.map((item, i) => {
    return {
      key: i,
      label: (
        <div onClick={(e) => _handleAction(e, item)}>
          {item?.icon} {item?.title}
        </div>
      ),
    };
  });
  return (
    <Dropdown
      className={className}
      open={open}
      onOpenChange={(open) => setOpen(open)}
      menu={{ items }}
    >
      {children}
    </Dropdown>
  );
};
