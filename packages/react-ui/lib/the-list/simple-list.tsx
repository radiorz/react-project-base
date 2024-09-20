import { ReactNode } from "react";

interface SimpleListProps {
  className: string;
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
}

export function SimpleList({
  className = "",
  items,
  renderItem,
}: SimpleListProps) {
  return (
    <div className={`overflow-y-scroll bg-gray-200 bg-gray-800 flex-grow ${className}`}>
      {/* // 这里需要滚动 */}
      <div className="flex flex-wrap w-full @container justify-start">
        {/* // 这里要做虚拟列表 */}
        {items?.map((item: any, index) => {
          return renderItem(item, index);
        })}
      </div>
    </div>
  );
}
