import { Button, Result } from "antd";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
  function goBackHome() {
    navigate("/");
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起, 当前您访问的页面不存在"
      extra={
        <Button type="primary" onClick={goBackHome}>
          跳回首页
        </Button>
      }
    />
  );
};
