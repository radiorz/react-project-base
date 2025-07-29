/**
 * @author
 * @file useForm.tsx
 * @fileBase useForm
 * @path packages\form\lib\useForm.tsx
 * @from 
 * @desc 
 * @example
 */

import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
export interface useFormOptions {
}

export const defaultUseFormOptions: useFormOptions = {
};

export default function useForm(options: Partial<useFormOptions> = {}) {
  const opts = { ...defaultUseFormOptions, ...options };
  const [value] = useState(null);
  
  return {value};
}
