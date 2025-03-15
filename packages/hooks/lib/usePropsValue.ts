import { SetStateAction,useRef } from "react";
import {useMemorizedFn ,useUpdate}from 'ahooks'
type Options<T> = {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}
export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options;
  const update = useUpdate()
const s}
