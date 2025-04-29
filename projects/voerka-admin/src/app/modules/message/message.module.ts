import { configurable, module, Module, state } from "@voerka/react";
import mqtt, { type MqttClient } from "mqtt";
import { nanoid } from "nanoid";
export const STATUS_MAP = {
  connect: "connect",
  connecting: "connecting",
  disconnect: "disconnect",
} as const;

const defaultState = {
  broker: configurable(""),
  username: configurable(""),
  password: configurable(""),
  clientId: configurable("voerka-visiting-admin-web" + nanoid()),
  reconnectAttempts: configurable(0),
  connecting: false,
  status: STATUS_MAP.disconnect as (typeof STATUS_MAP)[keyof typeof STATUS_MAP],
};

@module({ observable: true, id: "message" })
export class MessageModule extends Module {
  state = state(defaultState);
  client: MqttClient | null = null;
  onReady() {
    this.connect();
  }
  disconnect() {
    this.client?.end?.();
  }
  connect() {
    if (this.client) this.client.end();
    this.state.status = STATUS_MAP.disconnect;
    const { broker, username, password, clientId } = this.state; // 从环境变量获取
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
    this.state.status = STATUS_MAP.disconnect;
  }
  onError(err: any) {
    // console.log(`err`, err);
    this.state.status = STATUS_MAP.disconnect;
  }
  // topics = [];
  doSubscribe() {}
  onConnect() {
    this.logger.debug("Connected to MQTT broker");
    this.doSubscribe();
    this.state.status = STATUS_MAP.connect;
  }

  onDisconnect() {
    this.logger.debug("Disconnected from MQTT broker");
    this.state.status = STATUS_MAP.disconnect;
  }

  onMessage(topic: string, message: Buffer) {
    try {
      console.log(`topic,message`, topic, message);
    } catch (err) {
      console.log(`onMessage error`, err, message);
    }
  }
}
