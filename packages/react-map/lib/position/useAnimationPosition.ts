// useAnimatedPosition.ts
import { useState, useEffect, useRef } from "react";
import { isEqual } from "lodash-es";
import { Vec2 } from "./Vec2";

export const useAnimatedPosition = (
  latestPosition: Vec2,
  duration: number = 5000
) => {
  const [position, setPosition] = useState<Vec2>(latestPosition);
  const prevPositionRef = useRef<Vec2>(latestPosition);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // 最新位置与之前的位置不同
    if (
      latestPosition.x !== prevPositionRef.current.x ||
      latestPosition.y !== prevPositionRef.current.y
    ) {
      startAnimation(latestPosition);
    }
    // 组件卸载时清理
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      // 在退出才记录最后的值
      prevPositionRef.current = latestPosition;
    };
  }, [latestPosition.x, latestPosition.y]);

  const startAnimation = (endPosition: Vec2) => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    const startPosition = prevPositionRef.current.clone();
    startTimeRef.current = performance.now();

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const newX =
        startPosition.x + (endPosition.x - startPosition.x) * progress;
      const newY =
        startPosition.y + (endPosition.y - startPosition.y) * progress;

      setPosition(new Vec2(newX, newY));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        prevPositionRef.current = endPosition;
        setPosition(endPosition);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return {
    position,
    prevPosition: prevPositionRef.current,
    animating: !isEqual(prevPositionRef.current, latestPosition),
  };
};
