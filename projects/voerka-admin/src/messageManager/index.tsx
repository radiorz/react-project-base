// src/services/mqttClient.js

import { throttle } from "lodash-es";
import mqtt, { type MqttClient } from "mqtt";
import { config } from "@/config";
import { eventbus, EVENTS } from "../eventbus";
// import { getAlarmTopic, getLocationInfoTopic } from "./consts/topic";
import { nanoid } from "nanoid";
export const STATUS_MAP = {
  connect: "connect",
  disconnect: "disconnect",
} as const;
const trueLikes = [true, "true", 1];
class MessageManager {
  client: MqttClient | null = null;
  reconnectAttempts = 0;
  constructor() {
    // 这里选用节流 因为过一段时间总得更新一次
    this.handleAlarm = throttle(this.handleAlarm.bind(this), 5000, {
      trailing: true,
    });
  }
  _status: keyof typeof STATUS_MAP = STATUS_MAP.disconnect;

  get status() {
    return this._status;
  }
  set status(value: keyof typeof STATUS_MAP) {
    eventbus.emit(
      EVENTS.MQTT_STATUS,
      value === STATUS_MAP.connect ? true : false
    );
    this._status = value;
  }
  disconnect() {
    if (this.client) this.client.end();
  }
  connect() {
    if (this.client) this.client.end();
    this.status = STATUS_MAP.disconnect;
    eventbus.emit("message", {
      action: "success",
      options: "消息服务开始连接",
    });
    const { broker, username, password } = config.get("mqtt"); // 从环境变量获取
    // console.log(`broker,username,password`, broker, username, password);
    // console.log(`broker`, broker);
    const clientId = "voerkaIndoorPositioning" + nanoid();
    this.client = mqtt.connect(broker, {
      username,
      password,
      clientId,
    });

    this.client.on(STATUS_MAP.connect, this.onConnect.bind(this));
    this.client.on(STATUS_MAP.disconnect, this.onDisconnect.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    this.client.on("close", this.onClose.bind(this));
    this.client.on("end", this.onClose.bind(this));
    this.client.on("error", this.onError.bind(this));
  }
  onClose() {
    console.log(`信令服务关闭 close`);
    this.status = STATUS_MAP.disconnect;
  }
  onError(err: any) {
    // console.log(`err`, err);
    this.status = STATUS_MAP.disconnect;
  }
  // topics = [];
  doSubscribe() {
    // const orgId = config.get("orgId");
    // const appId = config.get("appId");
    // const project = config.get("project");
    // const locationInfoTopic = getLocationInfoTopic({ orgId, appId, project });
    // const alarmTopic = getAlarmTopic({ orgId, appId, project });
    // console.log(
    //   "订阅主题: ",
    //   JSON.stringify([locationInfoTopic, alarmTopic], null, 2)
    // );
    // this.client.subscribe(locationInfoTopic);
    // this.client.subscribe(alarmTopic);
  }
  onConnect() {
    console.log("Connected to MQTT broker");
    this.doSubscribe();
    this.reconnectAttempts = 0;
    this.status = STATUS_MAP.connect;
    eventbus.emit("message", {
      action: "success",
      options: "消息服务已连接",
    });
    // 清除notification
  }

  onDisconnect() {
    console.log("Disconnected from MQTT broker");
    this.status = STATUS_MAP.disconnect;
    // 显示已断联
    eventbus.emit("message", {
      action: "error",
      options: "消息服务已断连",
    });
    // if (this.reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
    //   setTimeout(() => {
    //     console.log("Attempting to reconnect...");
    //     this.connect();
    //     this.reconnectAttempts++;
    //   }, RECONNECT_DELAY);
    // } else {
    //   console.error(
    //     "Max reconnect attempts reached. Please check your connection."
    //   );
    // }
  }
  isLocationInfo(topic) {
    // 不严谨
    return topic.includes("realtimeMeas");
  }
  isAlarm(topic) {
    return topic.includes("alarm");
  }
  onMessage(topic, message) {
    try {
      const logMessage = config.get("mqtt.logMessage");
      if (trueLikes.includes(logMessage))
        console.log(`onMessage,topic:`, topic);
      if (this.isLocationInfo(topic)) {
        const data = JSON.parse(message);
        // console.log(`isLocationInfo,topic`, data);
        this.handleLocationInfo(data);
      } else if (this.isAlarm(topic)) {
        const data = JSON.parse(message);
        this.handleAlarm(data);
      }
    } catch (err) {
      console.log(`onMessage error`, err, message);
    }
  }
}
const messageManager = new MessageManager();
// TODO 目前这里没有细粒度监听配置变化,所有配置变化都会进入回调从而重启.
// config.on("valueChange", ({ path, value }) => {
//   console.log(`valueChange path,value`, path, value);
// });
config.on("change", (config) => {
  console.log("配置更新,重新连接", config?.mqtt);
  if (!config?.mqtt) {
    messageManager.disconnect();
    return;
  }
  // 重新连接
  messageManager.connect();
});
export default messageManager;
declare global {
  let $messageManager: MessageManager | undefined;
}

if (import.meta.env.DEV) {
  $messageManager = messageManager;
}

