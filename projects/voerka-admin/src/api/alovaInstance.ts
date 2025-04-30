import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import ReactHook from "alova/react";
import { getToken } from "@/utils/token";
import { createClientTokenAuthentication } from "alova/client";
import { router } from "../router";
export const { onAuthRequired } = createClientTokenAuthentication({
  // 配置项
  assignToken: (method) => {
    method.config.headers.Authorization = "Bearer " + getToken();
  },
});

export const alovaInstance = createAlova({
  baseURL: "/",
  statesHook: ReactHook,
  beforeRequest: onAuthRequired(() => {
    // console.log(`method`, method);
  }),
  responded: async (response) => {
    // console.log(`response`, response);
    let result;
    try {
      result = await response.json();
    } catch (err) {
      // 不是json 的化直接返回非json字段
      return response;
    }
    if (result.status === "unauthorized") {
      router.navigate(`/403`);
      // router.navigate(`/login`);
    }
    if (result.status === "failed") {
      throw new Error(result.message);
    }
    if (result.status === "success") {
      return result.payload;
    }
    return result;
  },
  requestAdapter: adapterFetch(),
});

// dev
import.meta.env.DEV && (globalThis.$api = alovaInstance);
