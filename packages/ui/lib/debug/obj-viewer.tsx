/**
 * @author
 * @file obj-viewer.tsx
 * @fileBase obj-viewer
 * @path packages\ui\lib\debug\obj-viewer.tsx
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from "react";
export interface ObjViewerProps {
  value: any;
}
export const ObjViewer: React.FC<ObjViewerProps> = ({ value }) => {
  return <textarea>{JSON.stringify(value, null, 2)}</textarea>;
};

// 默认导出
export default ObjViewer;
