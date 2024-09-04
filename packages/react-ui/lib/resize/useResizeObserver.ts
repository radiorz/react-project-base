import { useEffect, useState } from "react";

// useResizeObserver hook
export default function useResizeObserver(ref: any) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observeTarget = ref.current;

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          // console.log(`entry`, entry);
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        });
      });

      resizeObserver.observe(observeTarget);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return { ref, dimensions };
}
