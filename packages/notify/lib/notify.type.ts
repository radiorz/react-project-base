import React, { ReactNode, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export type NotifyPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface NotifyOptions {
  position?: NotifyPosition;
  maxHeight?: number;
  closable?: boolean;
  duration?: number; // 自动关闭的时间，单位毫秒
}

export interface NotifyInstance {
  close: () => void;
  update: (newContent: ReactNode) => void;
}

export interface NotifyItem {
  id: string;
  content: ReactNode;
  options?: NotifyOptions;
}
