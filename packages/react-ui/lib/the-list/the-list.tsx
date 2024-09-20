/**
 * @author
 * @file list.tsx
 * @fileBase list
 * @path packages\react-ui\lib\great-list\list.tsx
 * @from
 * @desc 就是一个搜索列表面板
 * @todo
 * @done
 * @example
 */
/**
 * # TODO
 * item 排序 根据item的某个value进行排序（直接传入排序函数即可）
 * item 过滤 根据item的value进行过滤
 * - 资源排序
 * # DONE
 * ## 20240914 星期六
 * 大中小的显示(响应式设计) 这个直接使用tailwind 的container queries语法即可
 * # FUTURE
 */

import { ReactNode } from "react";
import { ActionGroupBar, type ActionGroupBarProps } from "../action-group";
interface RenderItemProps {
  item: any[];
  index: number;
}
export interface TheListProps extends Omit<ActionGroupBarProps, "className"> {
  items: any[];
  renderItem: (props: RenderItemProps) => ReactNode;
}
export function TheList({
  renderTitle,
  actions = [],
  handleAction,
  primaryActionCount,
  items,
  renderItem,
}: TheListProps) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* 上边栏 */}
      <ActionGroupBar
        renderTitle={renderTitle}
        primaryActionCount={primaryActionCount}
        actions={actions}
        handleAction={handleAction}
      ></ActionGroupBar>
      {/* 下边list */}
      <div className="flex-grow overflow-y-auto bg-gray-200 dark:bg-gray-800">
        {/* // 这里需要滚动 */}
        <div className="flex flex-wrap w-full @container justify-start">
          {/* // 这里要做虚拟列表 */}
          {items?.map((item: any, index) => {
            return renderItem({ item, index });
          })}
        </div>
        {/* 很有可能有个侧边栏 */}
      </div>
    </div>
  );
}
// 虚拟列表参考
// https://github.com/bvaughn/react-window
