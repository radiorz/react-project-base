import { ReactNode } from "react";
import { NotifyOptions } from "./notify.type";

export const NotifyItem: React.FC<{
  content: ReactNode;
  options?: NotifyOptions;
  onClose: () => void;
}> = ({ content, options, onClose }) => {
  const { maxHeight = 200, closable = true } = options || {};

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        maxHeight: `${maxHeight}px`,
        overflowY: "auto",
        position: "relative",
      }}
    >
      {closable && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      )}
      {content}
    </div>
  );
};
