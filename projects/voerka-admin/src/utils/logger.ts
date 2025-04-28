import { Logger } from "@tikkhun/logger";
function isLevelEnabled(level, levels) {
  if (!levels) {
    return true;
  }
  return levels.includes(level);
}
function buildMessage(message, { timestamp }) {
  if (timestamp) return `${Date.now()} ${message}`;
  return message;
}
class IndexDbLogger {
  
  options: any;
  constructor(options: any) {
    this.options = options;
    // 打开日志
    this.store = window.indexedDB.open("Logger", 3);
  }

  static isLevelEnabled(level, levels) {
    if (!levels) {
      return true;
    }
    return levels.includes(level);
  }
  static buildMessage(message, { timestamp }) {
    if (timestamp) return `${Date.now()} ${message}`;
    return message;
  }
  log(message: string) {
    if (!isLevelEnabled("log", this.options?.levels)) {
      return;
    }
    console.log(
      buildMessage(message, {
        timestamp: this.options?.timestamp,
      })
    );
  }
  error(message: string) {
    if (!isLevelEnabled("error", this.options?.levels)) {
      return;
    }
    console.error(
      buildMessage(message, {
        timestamp: this.options?.timestamp,
      })
    );
  }
  warn(message: string) {
    if (!isLevelEnabled("warn", this.options?.levels)) {
      return;
    }
    console.warn(
      buildMessage(message, {
        timestamp: this.options?.timestamp,
      })
    );
  }
  debug(message: string) {
    if (!isLevelEnabled("debug", this.options?.levels)) {
      return;
    }
    console.debug(
      buildMessage(message, {
        timestamp: this.options?.timestamp,
      })
    );
  }
  verbose(message: string) {
    if (!isLevelEnabled("verbose", this.options?.levels)) {
      return;
    }
    console.error(
      buildMessage(message, {
        timestamp: this.options?.timestamp,
      })
    );
  }
  fatal(message: string) {
    if (!isLevelEnabled("fatal", this.options?.levels)) {
      return;
    }
    console.error(
      buildMessage(message, {
        timestamp: this.options?.timestamp,
      })
    );
  }
  setLogLevels(levels) {
    if (!this.options) {
      this.options = {};
    }
    this.options.levels = levels;
  }
}

Logger.overrideLogger(new IndexDbLogger());
const logger = new Logger();
export default logger;
// Logger.log("123");
if (import.meta.env.DEV) {
  globalThis.$logger = logger;
}
