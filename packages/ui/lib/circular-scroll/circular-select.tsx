import { useEffect, useRef, useState } from 'react';

interface CircularScrollProps {
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  value?: number;
  height?: number;
}

const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 5;

export const CircularSelect: React.FC<CircularScrollProps> = ({
  min = 0,
  max = 60,
  onChange,
  value = 0,
  height = ITEM_HEIGHT * VISIBLE_COUNT,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const range = max - min + 1;
  const items = Array.from({ length: range }, (_, i) => min + i);
  // 生成三倍数据用于循环滚动
  const loopItems = [...items, ...items, ...items];
  const middleIndex = items.length;

  useEffect(() => {
    // 初始滚动到中间
    if (listRef.current) {
      listRef.current.scrollTop =
        middleIndex * ITEM_HEIGHT + value * ITEM_HEIGHT;
    }
  }, [middleIndex, value]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    let top = target.scrollTop;
    const totalHeight = items.length * ITEM_HEIGHT;
    // 循环滚动
    if (top <= ITEM_HEIGHT) {
      top += totalHeight;
      target.scrollTop = top;
    } else if (top >= totalHeight * 2) {
      top -= totalHeight;
      target.scrollTop = top;
    }
    setScrollTop(top);
    // 计算当前值
    const idx = Math.round((top % totalHeight) / ITEM_HEIGHT) % items.length;
    if (onChange) onChange(items[idx]);
  };

  return (
    <div
      style={{ height, overflowY: 'auto', position: 'relative' }}
      ref={listRef}
      onScroll={handleScroll}
    >
      <div
        style={{ height: loopItems.length * ITEM_HEIGHT, position: 'relative' }}
      >
        {loopItems.map((num, i) => (
          <div
            key={i}
            style={{
              height: ITEM_HEIGHT,
              lineHeight: ITEM_HEIGHT + 'px',
              textAlign: 'center',
              background:
                Math.abs(
                  ((scrollTop / ITEM_HEIGHT) % items.length) -
                    (i % items.length),
                ) < 0.5
                  ? '#eee'
                  : '',
              fontWeight:
                Math.abs(
                  ((scrollTop / ITEM_HEIGHT) % items.length) -
                    (i % items.length),
                ) < 0.5
                  ? 'bold'
                  : 'normal',
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};
