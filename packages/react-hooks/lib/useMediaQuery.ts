import { useState, useEffect } from "react";

// useMediaQuery hook
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 设置初始匹配状态
    setMatches(media.matches);

    // 事件监听器，当媒体查询结果变化时更新状态
    const listener = (event: any) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);

    // 清理函数，在组件卸载时移除事件监听器
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]); // 依赖数组中包含查询字符串，以确保查询字符串变化时重新运行效果

  return matches;
}
