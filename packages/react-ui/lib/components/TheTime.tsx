import { useState, useEffect } from "react";

function TheTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>{currentTime.toLocaleTimeString()}</p>;
}

export default TheTime;
