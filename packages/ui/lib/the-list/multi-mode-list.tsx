/**
 * @author
 * @file list.tsx
 * @fileBase list
 * @path packages\react-ui\lib\great-list\list.tsx
 * @from
 * @desc 就是一个伟大的列表面板 可以为简单的表格列表， 可以是面板形式， 面板有大面板和小面板可以选
 * @example
 */
/**
 * # TODO
 * - table 形式
 * # DONE
 * ## 20240914 星期六
 * - 面板形式
 * # FUTURE
 */

import { ReactNode } from "react";
import {
  InlineActionGroup,
  type Action,
  type ActionHandler,
} from "../action-group";
import { Table } from "antd";
interface RenderItemProps {
  headers: any[];
  item: any[];
  index: number;
  mode: "table" | "list";
}
interface MultiModeListProps {
  renderTitle?: () => ReactNode;
  actions?: Action[];
  handleAction?: ActionHandler;
  headers: any[];
  mode: "table" | "list";
  items: any[];
  renderItem: (props: RenderItemProps) => ReactNode;
}
export function MultiModeList({
  renderTitle,
  actions = [],
  handleAction,
  headers,
  mode = "list",
  items,
  renderItem,
}: MultiModeListProps) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* 上边栏 */}
      <div className="flex flex-row items-center justify-between p-2">
        {renderTitle?.()}
        <div className="flex-grow"></div>
        <InlineActionGroup
          actions={actions}
          handleAction={handleAction}
        ></InlineActionGroup>
      </div>
      {mode === "table" && <Table></Table>}
      {mode === "list" && (
        <div className="flex-grow overflow-y-scroll bg-gray-200 dark:bg-gray-800">
          {/* // 这里需要滚动 */}
          <div className="flex flex-wrap w-full @container justify-start">
            {/* // 这里要做虚拟列表 */}
            {items?.map((item: any, index) => {
              return renderItem({ headers, item, index, mode });
            })}
          </div>
        </div>
      )}
    </div>
  );
}
