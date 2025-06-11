/**
 * @author
 * @file useSearchInput.tsx
 * @fileBase useSearchInput
 * @path packages\search-input\lib\useSearchInput.tsx
 * @from 
 * @desc 
 * @example
 */

import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
export interface useSearchInputOptions {
}

export const defaultuseSearchInputOptions: useSearchInputOptions = {
};

export default function useSearchInput(options: Partial<useSearchInputOptions> = {}) {
  const opts = { ...defaultuseSearchInputOptions, ...options };
  const [value] = useState(null);

  return {value};
}
