import { LockOutlined } from "@ant-design/icons";
import { App, Button, Input } from "antd";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
export interface LockProps {
  checkPassword: (password: string) => Promise<boolean>;
  setValid: () => void;
}
export const Lock: React.FC<LockProps> = ({ checkPassword, setValid }) => {
  const { message } = App.useApp();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const handleSubmit = async () => {
    const isValidPassword = !(await checkPassword(password));
    if (isValidPassword) {
      // 密码错误，可以给出提示
      message.error("密码错误，请重新输入。");
      return;
    }
    setValid();
    // 密码正确，跳转到设置页
    navigate(redirect);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 阻止默认行为
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <LockOutlined className="mb-4 text-4xl" />
      <Input.Password
        placeholder="请输入密码"
        value={password}
        onChange={handlePasswordChange}
        onKeyDown={handleKeyPress} // 或者使用 onKeyDown
      />
      <Button className="w-full" type="primary" onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
};

export default Lock;
