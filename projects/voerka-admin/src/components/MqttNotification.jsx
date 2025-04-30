/**
 * @author
 * @file MqttNotification.jsx
 * @fileBase MqttNotification
 * @path src\components\MqttNotification.jsx
 * @from
 * @desc MQTT连接状态通知组件
 * @todo
 *
 * @done
 * @example
 */

import { EVENTS } from "@/eventbus";
import useEventbus from "@/hooks/useEventbus";
import  { STATUS_MAP } from "@/messageManager";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useEffect } from "react";
const MqttNotification = () => {
  const [api, contextHolder] = notification.useNotification();
  const messageModule = useModule() 
  const openNotification = () => {
    api.open({
      message: "消息服务连接断开",
      description: (
        <div className="flex flex-col gap-1">
          <span>消息服务连接已断开，请检查网络连接。</span>
          <Button onClick={handleReconnect}>点击重新连接</Button>
        </div>
      ),
      icon: <ExclamationCircleFilled className="text-red-500" />,
      placement: "topRight",
      duration: 0,
      key: "mqtt-notification",
      closeIcon: <></>,
    });
  };

  const closeNotification = () => {
    api.destroy("mqtt-notification");
  };

  const handleReconnect = () => {
    // 在这里添加重新连接的逻辑
    mqttClient.connect();
  };
  // console.log(`123`, 123);
  useEffect(() => {
    if (mqttClient.status !== STATUS_MAP.connect) {
      openNotification();
    }
  }, []);

  useEffect(() => {
    return () => {
      api.destroy();
    };
  }, [api]);

  return contextHolder;
};

export default MqttNotification;
