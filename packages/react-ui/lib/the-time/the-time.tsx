import { useTime } from "@tikkhun/react-hooks";

export function TheTime() {
  const { currentTime } = useTime();

  return <span>{currentTime.toLocaleTimeString()}</span>;
}
