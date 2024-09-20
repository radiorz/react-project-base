/**
 * @author
 * @file Sash.tsx
 * @fileBase Sash
 * @path src/components/TheLayout/Sash.tsx
 * @from
 * @desc 可拖动的分隔条组件
 * @todo
 *
 * @done 转换为 TypeScript
 * 20240910 手机上使用
 * @example
 */
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sash.module.css";
import { DirectionMap } from "./utils";
// 定义 Sash 组件的属性接口
interface SashProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  onFrontClick?: () => void; // 前箭头点击事件
  onEndClick?: () => void; // 后箭头点击事件
  onMove?: (dis: { x: number; y: number }) => void; // 移动事件
}

// 定义向量接口
interface Vector {
  x: number;
  y: number;
}

const Sash: React.FC<SashProps> = ({
  className = "",
  direction = DirectionMap.horizontal,
  onMove,
  onFrontClick,
  onEndClick,
}) => {
  // 状态：是否悬停
  const [isHover, setHover] = useState<boolean>(false);
  // 引用：是否正在拖动
  const isDrag = useRef<boolean>(false);
  // 引用：当前位置向量
  const vec = useRef<Vector>({ x: 0, y: 0 });

  // 处理鼠标点击事件
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const clientX = e.clientX;
    const clientY = e.clientY;
    vec.current = { x: clientX, y: clientY };
    isDrag.current = true;
  }
  // 鼠标移动事件
  function handleMouseMove(e: MouseEvent) {
    if (!isDrag.current) {
      return;
    }
    e.preventDefault();
    const clientX = e.clientX;
    const clientY = e.clientY;
    const dis = { x: clientX - vec.current.x, y: clientY - vec.current.y };
    onMove?.(dis);
    vec.current = { x: clientX, y: clientY };
  }
  // 触屏点击
  function handleTouchStart(e: React.TouchEvent) {
    e.preventDefault();
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    vec.current = { x: clientX, y: clientY };
  }
  // 触屏移动
  function handleTouchMove(e: React.TouchEvent) {
    e.preventDefault();
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    const dis = { x: clientX - vec.current.x, y: clientY - vec.current.y };
    onMove?.(dis);
    vec.current = { x: clientX, y: clientY };
  }

  // 设置拖动状态为 false
  function setDragFalse() {
    isDrag.current = false;
  }

  // 添加和移除鼠标移动事件监听器
  useEffect(() => {
    if (!isDrag.current) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDrag.current]);

  // 添加和移除鼠标抬起事件监听器
  useEffect(() => {
    window.addEventListener("mouseup", setDragFalse);
    window.addEventListener("mouseleave", setDragFalse);
    return () => {
      window.addEventListener("mouseup", setDragFalse);
      window.removeEventListener("mouseleave", setDragFalse);
    };
  }, []);

  // 根据方向设置样式类名
  const sashClassName =
    direction === DirectionMap.horizontal
      ? "w-4 h-full cursor-col-resize flex-col"
      : "h-4 w-full cursor-row-resize flex-row";
  const isHoverClassName = isHover ? "bg-blue-100 dark:bg-blue-900" : "";
  const isHorizontal = direction === DirectionMap.horizontal;
  function handleFrontClick(e: React.MouseEvent) {
    e.preventDefault();
    onFrontClick?.();
  }
  function handleEndClick(e: React.MouseEvent) {
    e.preventDefault();
    onEndClick?.();
  }
  return (
    <div
      className={`flex gap-1 justify-center items-center bg-gray-200 dark:bg-gray-800 active:bg-blue-200 dark:active:bg-blue-800 text-dark dark:text-white ${isHoverClassName} ${className} ${sashClassName}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
    >
      {isHorizontal ? (
        <>
          <div
            className={styles.collapseButton}
            title="左侧折叠"
            onClick={handleFrontClick}
          >
            <CaretLeftOutlined />
          </div>
          <div
            className={styles.collapseButton}
            title="右侧折叠"
            onClick={handleEndClick}
          >
            <CaretRightOutlined />
          </div>
        </>
      ) : (
        <>
          <div
            className={styles.collapseButton}
            title="上侧折叠"
            onClick={handleFrontClick}
          >
            <CaretUpOutlined />
          </div>
          <div
            className={styles.collapseButton}
            title="下侧折叠"
            onClick={handleEndClick}
          >
            <CaretDownOutlined />
          </div>
        </>
      )}
    </div>
  );
};

export default Sash;
