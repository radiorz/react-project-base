import { useTime } from "@tikkhun/react-hooks";

function TheTime() {
  const { currentTime } = useTime();

  return <span>{currentTime.toLocaleTimeString()}</span>;
}

export default TheTime;
