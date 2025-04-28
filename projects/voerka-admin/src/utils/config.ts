import { Config, EnvSource, LocalStorageSource } from "@tikkhun/web-config";
// import { LocalStorageSource } from "@tikkhun/web-config";
const LocalStorageConfigKey = "VoerkaIndoorPositioningConfig";
// export
class ViteEnvSource extends EnvSource {
  getEnv() {
    return import.meta.env;
  }
  initEnv() {
    return true;
  }
}

const envSource = new ViteEnvSource({
  includePrefix: "VITE__VOERKA__",
  shouldRemovedPrefix: "VITE__VOERKA__",
  valueTransformer(key, value) {
    // 转换bool
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return value;
  },
});

export const config = Config.create({
  sources: [
    envSource,
    new LocalStorageSource({
      // 存储的键值对
      key: LocalStorageConfigKey,
      saveDebounce: 0,
      emitError: false,
    }),
  ],
});
// console.log(`import.env`, import.meta.env);
// if(import.meta.env.)
globalThis.$config = config;
export function app() {
  return config.get("app");
}
export function project() {
  return config.get("project");
}
