/**
 * @author
 * @file Login.ts
 * @fileBase Login
 * @path packages\ui\lib\login\Login.ts
 * @from
 * @desc
 * @example
 */
import { Button, Form, Input, App } from "antd";
import { useNavigate, useSearchParams } from "react-router";
export interface LoginProps {
  loading: boolean;
  handleSubmit: (values: any) => Promise<void>;
}
export const Login: React.FC<LoginProps> = ({ loading, handleSubmit }) => {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // 获取 redirect 参数
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  const onFinish = async () => {
    try {
      await handleSubmit({
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
      });
      // console.log(`token`,getToken());
      navigate(redirect || "/");
      message.success("登录成功！");
    } catch (err) {
      message.error("登录失败，请重试！");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// 默认导出
export default Login;
