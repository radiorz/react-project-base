import React, { useState, useRef, useEffect, ReactNode } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface ThreeColumnLayoutProps {
  children: [ReactNode, ReactNode, ReactNode];
  className?: string;
}

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  children,
  className = "",
}) => {
  const [leftWidth, setLeftWidth] = useState(250);
  const [rightWidth, setRightWidth] = useState(250);
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizingLeft && containerRef.current) {
        const newWidth =
          e.clientX - containerRef.current.getBoundingClientRect().left;
        setLeftWidth(
          Math.max(50, Math.min(newWidth, window.innerWidth - rightWidth - 100))
        );
      } else if (isResizingRight && containerRef.current) {
        const newWidth =
          containerRef.current.getBoundingClientRect().right - e.clientX;
        setRightWidth(
          Math.max(50, Math.min(newWidth, window.innerWidth - leftWidth - 100))
        );
      }
    };

    const handleMouseUp = () => {
      setIsResizingLeft(false);
      setIsResizingRight(false);
    };

    if (isResizingLeft || isResizingRight) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizingLeft, isResizingRight, leftWidth, rightWidth]);

  return (
    <div ref={containerRef} className={`flex h-screen ${className}`}>
      <div
        style={{
          width: isLeftVisible ? `${leftWidth}px` : "0px",
          minWidth: "0px",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out bg-green-400"
      >
        {children[0]}
      </div>
      <div className="relative flex items-center justify-center w-1 bg-gray-300 cursor-col-resize group">
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsResizingLeft(true);
          }}
          className="w-4 cursor-col-resize"
        ></div>
        <div
          onClick={() => setIsLeftVisible(!isLeftVisible)}
          className="z-10 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md cursor-pointer"
        >
          {isLeftVisible ? <LeftOutlined /> : <RightOutlined />}
        </div>
      </div>
      <div className="flex-grow overflow-auto bg-white">{children[1]}</div>
      <div className="flex items-center justify-center w-1 bg-gray-300 cursor-col-resize group">
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsResizingRight(true);
          }}
          className="absolute inset-y-0 right-0 w-4 cursor-col-resize"
        ></div>
        <div
          onClick={() => setIsRightVisible(!isRightVisible)}
          className="z-10 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md cursor-pointer"
        >
          {isRightVisible ? <RightOutlined /> : <LeftOutlined />}
        </div>
      </div>
      <div
        style={{
          width: isRightVisible ? `${rightWidth}px` : "0px",
          minWidth: "0px",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out bg-gray-100"
      >
        {children[2]}
      </div>
    </div>
  );
};
