import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      // console.log(`useWindowDimensions`, handleResize);
      // console.log(`window.innerWidth,`, window.innerWidth);
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 监听窗口大小变化事件
    window.addEventListener("resize", handleResize);

    // 组件卸载时移除事件监听
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
