/**
 * @author
 * @file list.tsx
 * @fileBase list
 * @path packages\react-ui\lib\great-list\list.tsx
 * @from
 * @desc 就是一个伟大的列表面板 可以为简单的表格列表， 可以是面板形式， 面板有大面板和小面板可以选
 * @todo
 * item 排序 根据item的某个value进行排序（直接传入排序函数即可）
 * item 过滤 根据item的value进行过滤
 * 大中小的显示(响应式设计)
 * @done
 * @example
 */

import { InlineActionGroup, type Action } from "../action-group";
interface Props {
  title?: string;
  actions?: Action[];
  handleAction?: Function;
}
export function GreatList({ title, actions = [], handleAction }: Props) {
  return (
    <div>
      {/* 上边栏 */}
      <div>
        {title}
        <InlineActionGroup
          actions={actions}
          handleAction={handleAction}
        ></InlineActionGroup>
      </div>
      {/* 下边list */}
    </div>
  );
}
