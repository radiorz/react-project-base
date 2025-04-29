import { Button, Result } from "antd";
import { useNavigate } from "react-router";
export interface NotPermissionProps {
  redirectPath: string;
}
export const NotPermission: React.FC<NotPermissionProps> = ({
  redirectPath,
}) => {
  const navigate = useNavigate();
  function goBackHome() {
    navigate("/");
  }
  function goLogin() {
    navigate(`/login?redirect=${redirectPath}`);
  }
  return (
    <Result
      status="403"
      title="403"
      subTitle="对不起, 当前您没有访问权限"
      extra={
        <>
          <Button type="primary" onClick={goBackHome}>
            跳回首页
          </Button>
          <Button type="primary" onClick={goLogin}>
            重新登录
          </Button>
        </>
      }
    />
  );
};
