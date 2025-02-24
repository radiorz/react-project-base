import Ajv from "ajv";
import addFormats from "ajv-formats";

// 初始化 AJV
const ajv = new Ajv();
addFormats(ajv);
export { ajv };
