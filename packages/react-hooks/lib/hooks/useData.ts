/**
 * 简单的
 * @deprecated Use {@link ahook useRequest} instead.
 */
import { useState, useEffect } from "react";
export interface Options {
  url: string;
}
export const DEFAULT_OPTIONS = {
  url: "",
  method: "GET",
};
export function useData(options?: Partial<Options>) {
  const opts = Object.assign(DEFAULT_OPTIONS, options);
  const [data, setData] = useState(null);
  useEffect(() => {
    // 即使成功也忽略
    let ignore = false;
    // 取消
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(opts.url, {
      method: opts.method,
      signal: signal, // <------ This is our AbortSignal
    })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      // 控制取消
      controller.abort();
      ignore = true;
    };
  }, [opts]);
  return data;
}
