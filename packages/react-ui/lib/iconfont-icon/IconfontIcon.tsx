/**
 * @author
 * @file IconfontIcon.tsx
 * @fileBase IconfontIcon
 * @path packages\react-ui\lib\iconfont-icon\IconfontIcon.tsx
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from "react";
export interface IconfontIconProps {
  type: string;
  className: string;
  style: any;
  [props: string]: any;
  // value: propTypes.any
}
export const IconfontIcon: React.FC<IconfontIconProps> = ({
  type,
  className,
  style,
  ...props
}) => {
  return (
    <i
      {...props}
      className={`iconfont icon-${type} ${className || ""}`}
      style={style}
    />
  );
};
