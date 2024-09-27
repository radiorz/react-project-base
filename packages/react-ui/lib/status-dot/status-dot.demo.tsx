/**
 * @author
 * @file status-dot.demo.tsx
 * @fileBase status-dot.demo
 * @path packages\react-ui\lib\status-dot\status-dot.demo.tsx
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from "react";
import { Status, StatusDot } from "./status-dot";
interface Props {
  // value: propTypes.any
}
export const StatusDotDemo: React.FC<Props> = () => {
  const [status, setStatus] = useState(Status.fail);
  useEffect(() => {
    let index = 0;
    let statuses = [Status.success, Status.fail, Status.warning];
    let intervalId = setInterval(() => {
      index++;
      setStatus(statuses[index % statuses.length]);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <StatusDot status={Status.success}></StatusDot>
      <StatusDot status={Status.fail}></StatusDot>
      <StatusDot status={Status.warning}></StatusDot>
      <StatusDot status={status}></StatusDot>
    </>
  );
};
