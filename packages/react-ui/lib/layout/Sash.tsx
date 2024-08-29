import React, { useState, useEffect, useCallback, useRef } from "react";

interface SashProps {
  orientation: "vertical" | "horizontal";
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  children: [React.ReactNode, React.ReactNode];
}

const Sash: React.FC<SashProps> = ({
  orientation,
  defaultSize = 200,
  minSize = 100,
  maxSize = 500,
  children,
}) => {
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDragging = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newSize =
          orientation === "vertical"
            ? e.clientX - containerRect.left
            : e.clientY - containerRect.top;
        setSize(Math.min(Math.max(newSize, minSize), maxSize));
      }
    },
    [isDragging, orientation, minSize, maxSize]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopDragging);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging, onMouseMove, stopDragging]);

  const containerClass =
    orientation === "vertical" ? "flex flex-row" : "flex flex-col";
  const sashClass =
    orientation === "vertical"
      ? "w-1 cursor-col-resize bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
      : "h-1 cursor-row-resize bg-gray-300 hover:bg-gray-400 active:bg-gray-500";

  const firstPanelStyle = {
    [orientation === "vertical" ? "width" : "height"]: `${size}px`,
    overflow: "auto",
  };

  return (
    <div ref={containerRef} className={`${containerClass} h-full w-full`}>
      <div style={firstPanelStyle} className="flex-shrink-0">
        {children[0]}
      </div>
      <div
        className={`${sashClass} flex-shrink-0`}
        onMouseDown={startDragging}
      ></div>
      <div className="flex-grow overflow-auto">{children[1]}</div>
    </div>
  );
};

export default Sash;
