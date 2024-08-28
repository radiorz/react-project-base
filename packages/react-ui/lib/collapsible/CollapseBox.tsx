import { useState } from "react";
import {
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
export type CollapseBoxDirection = "left" | "right" | "top" | "bottom";
export interface CollapseBoxProps {
  className?: string;
  children?: React.ReactNode;
  direction?: CollapseBoxDirection;
  collapsible?: CollapseBoxDirection[];
}
export const CollapseBox = ({
  className,
  children,
  direction = "left",
  collapsible = ["left"],
}: CollapseBoxProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const getCollapseClasses = () => {
    switch (direction) {
      case "left":
        return collapsed ? "hidden" : "block";
      case "right":
        return collapsed ? "hidden" : "block";
      case "top":
        return collapsed ? "hidden" : "block";
      case "bottom":
        return collapsed ? "hidden" : "block";
      default:
        return "";
    }
  };

  const getCollapseIconComponent = () => {
    switch (direction) {
      case "left":
        return collapsed ? <RightOutlined /> : <LeftOutlined />;
      case "right":
        return collapsed ? <LeftOutlined /> : <RightOutlined />;
      case "top":
        return collapsed ? <DownOutlined /> : <UpOutlined />;
      case "bottom":
        return collapsed ? <UpOutlined /> : <DownOutlined />;
      default:
        return null;
    }
  };

  const getCollapseContainerClasses = () => {
    switch (direction) {
      case "left":
        return "border-r";
      case "right":
        return "border-l";
      case "top":
        return "border-b";
      case "bottom":
        return "border-t";
      default:
        return "";
    }
  };
  return (
    <div
      className={`flex ${className}`}
      style={{
        flexDirection:
          direction === "top" || direction === "bottom" ? "column" : "row",
      }}
    >
      {collapsible.includes("right") && (
        <div
          className={`bg-gray-200 border-gray-300 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out ${getCollapseContainerClasses()}`}
          onClick={toggleCollapse}
        >
          {getCollapseIconComponent()}
        </div>
      )}
      <div
        className={`p-4 transition-all duration-300 ease-in-out ${getCollapseClasses()}`}
      >
        {children}
      </div>
      {collapsible.includes("left") && (
        <div
          className={`bg-gray-200 border-gray-300 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out ${getCollapseContainerClasses()}`}
          onClick={toggleCollapse}
        >
          {getCollapseIconComponent()}
        </div>
      )}
    </div>
  );
};
