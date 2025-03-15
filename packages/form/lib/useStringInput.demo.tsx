import { useStringInput } from "./useStringInput";

export const UseStringInputDemo = () => {
  const usernameSchema = {
    type: "string",
    minLength: 6,
    maxLength: 12,
    pattern: "^[a-zA-Z0-9]+$",
    default: "", // 添加默认值
    // errorMessage: "用户名格式错误", // 这个字段不会被 AJV 使用，但可以用于展示
  };

  const { value, validValue, handleChange, error } =
    useStringInput(usernameSchema);

  return (
    <div>
      <div className="border-dotted">正确的值 {validValue}</div>

      <label>用户名</label>
      <input value={value} onChange={handleChange} placeholder="请输入用户名" />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

// 默认导出
export default UseStringInputDemo;
