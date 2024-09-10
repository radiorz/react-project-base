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
import React, { useEffect, useRef, useState } from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
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
  function handleTouchStart(e: TouchEvent) {
    e.preventDefault();
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    vec.current = { x: clientX, y: clientY };
  }
  // 触屏移动
  function handleTouchMove(e: TouchEvent) {
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
    return () => {
      window.removeEventListener("mouseup", setDragFalse);
    };
  }, []);

  // 根据方向设置样式类名
  const sashClassName =
    direction === DirectionMap.horizontal
      ? "w-4 h-full cursor-col-resize flex-col"
      : "h-4 w-full cursor-row-resize flex-row";
  const isHoverClassName = isHover ? "bg-blue-100" : "";
  const isHorizontal = direction === DirectionMap.horizontal;

  return (
    <div
      className={`flex justify-center items-center bg-gray-200 ${isHoverClassName} ${className} ${sashClassName}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
    >
      {isHorizontal ? (
        <>
          <CaretLeftOutlined onClick={onFrontClick} />
          <CaretRightOutlined onClick={onEndClick} />
        </>
      ) : (
        <>
          <CaretUpOutlined onClick={onFrontClick} />
          <CaretDownOutlined onClick={onEndClick} />
        </>
      )}
    </div>
  );
};

export default Sash;
