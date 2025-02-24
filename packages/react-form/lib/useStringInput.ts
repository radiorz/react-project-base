import { useState, useEffect } from "react";
import { ajv } from "./ajv";
interface StringInputSchema {
  
}
export function useStringInput(schema: Record<string, any>) {
  const [value, setValue] = useState(schema.default || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 校验
  const [validValue, setValidValue] = useState(schema.default || "");
  const [error, setError] = useState<string | null>(null);

  // 根据 schema 创建校验函数
  const validate = ajv.compile(schema);

  useEffect(() => {
    // 校验值是否符合 schema
    const valid = validate(value);
    if (!valid) {
      setError(validate.errors?.[0]?.message || "未知错误");
    } else {
      setValidValue(value);
      setError(null);
    }
  }, [value, validate]);

  return {
    value,
    validValue,
    handleChange,
    error,
  };
}
