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
  const dotColor = useMemo(() => {
    switch (status) {
      case Status.success:
        return "bg-green-500";
      case Status.fail:
        return "bg-red-500";
      case Status.warning:
        return "bg-orange-500";
      default:
        return "";
    }
  }, [status]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={status}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className={`w-2 h-2 rounded-full ${dotColor}`}
      ></motion.div>
    </AnimatePresence>
  );
};