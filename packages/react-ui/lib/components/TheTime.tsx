import { useTime } from "@tikkhun/react-hooks";

function TheTime() {
  const { currentTime } = useTime();

  return <p>{currentTime.toLocaleTimeString()}</p>;
}

export default TheTime;
