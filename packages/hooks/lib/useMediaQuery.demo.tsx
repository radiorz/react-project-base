import { useMediaQuery } from "./useMediaQuery"; // 假设你的钩子保存在这个文件中

function ResponsiveComponent() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      {isLargeScreen ? (
        <div>Large screen view</div>
      ) : (
        <div>Small screen view</div>
      )}
    </div>
  );
}

export default ResponsiveComponent;
