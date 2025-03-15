import { useState, useEffect } from "react";

export function useSystemTheme() {
  const [theme, setTheme] = useState("light"); // 默认设置为 light 主题
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: any) => {
      setTheme(e.matches ? "dark" : "light");
    };

    // 设置初始主题
    setTheme(mediaQuery.matches ? "dark" : "light");
    // 添加监听器
    mediaQuery.addEventListener("change", handleThemeChange);

    // 清理函数，在组件卸载时移除监听器
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []); // 依赖数组为空，表示这个 effect 只在组件挂载时运行一次

  return theme;
}
