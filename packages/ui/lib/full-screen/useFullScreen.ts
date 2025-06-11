import { useState, useCallback } from 'react';

// 使用自定义 Hook 管理全屏状态
export const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      // 进入全屏
      const elem = document.body; // 或者你想要全屏的特定元素
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullScreen((isFullScreen) => !isFullScreen);
  }, [isFullScreen]);

  return [isFullScreen, toggleFullScreen] as [boolean , ()=> void];
};
