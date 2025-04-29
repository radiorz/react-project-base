import { useState, useEffect } from "react";
export interface AnimationNumberProps {
  value: number;
  className?: string;
  title?: string;
}
export const AnimatedNumber: React.FC<AnimationNumberProps> = ({
  value,
  className,
  title,
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    const duration = 1000; // 动画持续时间（毫秒）
    const startTime = performance.now();

    const animateValue = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);

      setDisplayValue(currentValue);

      if (runtime < duration) {
        requestAnimationFrame(animateValue);
      }
    };

    requestAnimationFrame(animateValue);
  }, [value]);

  return (
    <div
      title={title}
      className={`transition-all duration-300 ease-out ${className}`}
    >
      {displayValue.toLocaleString()}
    </div>
  );
};
