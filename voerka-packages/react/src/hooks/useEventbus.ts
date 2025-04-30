/**
 * @author
 * @file useEventbus.ts
 * @fileBase useEventbus
 * @path packages\react\src\hooks\useEventbus.ts
 * @from
 * @desc
 * @example
 */

import { useApp } from "@/contexts";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

export default function useEventbus() {
  const app = useApp();
  return app.eventbus;
}
