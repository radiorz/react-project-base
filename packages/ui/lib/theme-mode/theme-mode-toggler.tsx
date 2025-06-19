/**
 * @author
 * @file theme-mode-selector.tsx
 * @fileBase theme-mode-selector
 * @path packages\react-ui\lib\theme-mode\theme-mode-selector.tsx
 * @from
 * @desc
 * @example
 */

// import { useState, useEffect, memo } from "react";
interface ThemeMode {}
export interface ThemeModeTogglerProps {
  value?: ThemeMode;
  onValueChange?: (value: ThemeMode) => void;
}

export const ThemeModeToggler: React.FC<ThemeModeTogglerProps> = ({}) => {
  return <div>ThemeModeToggler</div>;
};
