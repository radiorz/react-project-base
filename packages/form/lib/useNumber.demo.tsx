import { useStringInput } from "./useStringInput";

export const UseNumberInputDemo = () => {
  const countSchema = {
    type: "number",
    minimum: 1,
    maximum: 10,
    default: 5, // 添加默认值
    // errorMessage: "用户名格式错误", // 这个字段不会被 AJV 使用，但可以用于展示
  };

  const { value, validValue, handleChange, error } =
    useNumberInput(countSchema);

  return (
    <div>
      <div className="border-dotted">正确的值 {validValue}</div>

      <label>用户名</label>
      <input type="number" value={value} onChange={handleChange} placeholder="请输入用户名" />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

// 默认导出
export default UseNumberInputDemo;
