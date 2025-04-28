/**
 * @author
 * @file NetworkNotification.jsx
 * @fileBase NetworkNotification
 * @path src\components\NetworkNotification.jsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useNetwork } from "ahooks";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { notification } from "antd";
import { useEffect, useRef } from "react";
import { useRequest } from "alova/client";
import { checkNetwork } from "@/api/network";

NetworkNotification.propTypes = {
  // value: propTypes.any
};
function NetworkNotification() {
  const network = useNetwork();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "网络连接断开",
      description: (
        <div className="flex flex-col gap-1">
          <span>网络连接已断开，请检查网络连接。</span>
        </div>
      ),
      icon: <ExclamationCircleFilled className="text-red-500" />,
      placement: "topRight",
      duration: 0,
      key: "network-notification",
      closeIcon: <></>,
    });
  };

  const closeNotification = () => {
    api.destroy("network-notification");
  };
  // console.log(`network.online`, network.online);
  const { error, data, send } = useRequest(checkNetwork, {
    immediate: true,
    force: true,
  });
  useEffect(() => {
    const id = setInterval(async () => {
      // 这里有时候不需要每次额外send 因为其他请求也可以作为依据
      await send();
    }, 30_000);
    return () => {
      if (id) clearInterval(id);
    };
  }, []);
  useEffect(() => {
    if (network.online && data?.ok && !error) {
      closeNotification();
    } else {
      openNotification();
    }
    return () => {
      closeNotification();
    };
  }, [network, data, error]);
  // useEffect(() => {
  //   function handleOnline() {
  //     // console.log(`online`);
  //   }
  //   function handleOffline() {
  //     // console.log(`offline`);
  //   }
  //   window.addEventListener("online", handleOnline);
  //   window.addEventListener("offline", handleOffline);
  //   return () => {
  //     window.removeEventListener("online", handleOnline);
  //     window.removeEventListener("offline", handleOffline);
  //   };
  // });
  // return <div>{JSON.stringify(network)}</div>;
  return contextHolder;
}

export default NetworkNotification;
