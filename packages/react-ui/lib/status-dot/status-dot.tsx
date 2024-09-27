/**
 * @author
 * @file status-dot.tsx
 * @fileBase status-dot
 * @path packages\react-ui\lib\status-dot\status-dot.tsx
 * @from
 * @desc
 * @example
 */
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
export enum Status {
  success = "success",
  warning = "warning",
  fail = "fail",
}
interface StatusDotProps {
  status: Status;
}
export const StatusDot: React.FC<StatusDotProps> = ({ status }) => {
  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    //     transition={{ duration: 0.3, easing: "easeInOut" }}
    //   >
        <div
          className={`w-2 h-2 rounded-full 
        ${status === Status.success && "bg-green-500"}
        ${status === Status.fail && "bg-red-500"}
        ${status === Status.warning && "bg-orange-500"}
        `}
        ></div>
    //   </motion.div>
    // </AnimatePresence>
  );
};
