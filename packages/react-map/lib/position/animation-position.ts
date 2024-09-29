// useAnimatedPosition.js
import { useState, useEffect, useRef } from "react";
import { isEqual } from "lodash-es";
import { Vec2 } from "./Vec2";
export const useAnimatedPosition = (latestPosition: Vec2, duration = 5000) => {
  const [position, setPosition] = useState(latestPosition);
  const prevPositionRef = useRef<Vec2>(latestPosition);

  const animationRef = useRef<null | number>(null);
  const startTimeRef = useRef<null | number>(null);

  useEffect(() => {
    // 最新位置与之前的位置不同
    if (
      latestPosition.x !== prevPositionRef.current.x ||
      latestPosition.y !== prevPositionRef.current.y
    ) {
      startAnimation(latestPosition);
    }
    return () => {
      // 在退出才记录最后的值
      prevPositionRef.current = latestPosition;
    };
  }, [latestPosition]);

  const startAnimation = (endPosition: Vec2) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startPosition = prevPositionRef.current.clone();
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
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
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    // 当前位置
    position,
    // 是否在移动
    animating: !isEqual(prevPositionRef.current, latestPosition),
  };
};
