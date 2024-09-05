import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
export interface TreeNodeComponentProps {
  item: any;
  renderIcon: Function;
  searchValue: string;
  handleNodeAction: Function;
}
export function useSearchTitle(title: string, searchValue: string) {
  const index = title?.indexOf(searchValue || "");
  let titleComp;
  if (typeof index !== "undefined" && index > -1) {
    const beforeStr = title?.substring(0, index);
    const afterStr = title?.substring(index + searchValue.length);
    titleComp = (
      <span>
        {beforeStr}
        <span className="text-red-500 bg-yellow-200">{searchValue}</span>
        {afterStr}
      </span>
    );
  } else {
    titleComp = <span>{title || "-"}</span>;
  }
  return titleComp;
}
export const TreeNode = ({
  item,
  renderIcon,
  searchValue,
  handleNodeAction,
}: TreeNodeComponentProps) => {
  const title = useSearchTitle(item?.title, searchValue);
  const icon = renderIcon(item);
  function _handleNodeAction(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    type: string
  ) {
    e.stopPropagation();
    handleNodeAction(type, item);
  }
  return (
    <div className="flex items-center justify-between w-full group">
      <div className="flex items-center gap-2">
        {icon}
        {title}
      </div>
      {/* 父元素触发发显示 */}
      <div className="hidden group-hover:block">
        {/* todo 当特别窄的时候之显示一个...图标 */}
        <Button
          icon={<PlusOutlined />}
          size="small"
          onClick={(e) => _handleNodeAction(e, "add")}
          className="mr-1"
        />
        <Button
          icon={<EditOutlined />}
          size="small"
          onClick={(e) => _handleNodeAction(e, "update")}
          className="mr-1"
        />
        <Button
          icon={<DeleteOutlined />}
          size="small"
          onClick={(e) => _handleNodeAction(e, "delete")}
        />
        {/* 其他action行为 */}
      </div>
    </div>
  );
};
