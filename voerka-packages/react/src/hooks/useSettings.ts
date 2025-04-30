/**
 * @author
 * @file useSettings.ts
 * @fileBase useSettings
 * @path packages\react\src\hooks\useSettings.ts
 * @from
 * @desc
 * @example
 */
/**
 * # TODO
 * - getter 和 setter(store的方式)
 * # DONE
 * ## 20250115 星期三
 * # FUTURE
 */

// import { useState } from 'react'
import { useApp } from "../contexts";
// import { useDispatch } from "react-redux";
export interface useSettingsOptions {}

export function useSettings(keyPath?: string) {
  const app = useApp();
  // return { status: '未完工' }
  return app.settings;
  // if (typeof keyPath === 'undefined') return app.settings;
  // return get(app.settings, keyPath)
}
