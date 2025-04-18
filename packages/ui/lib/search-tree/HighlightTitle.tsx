/**
 * @author
 * @file HighlightTitle.tsx
 * @fileBase HighlightTitle
 * @path packages\ui\lib\search-tree\HighlightTitle.tsx
 * @from
 * @desc
 * @example
 */

export interface HighlightTitleProps {
  value: string;
  highlightText: string;
}
export const HighlightTitle: React.FC<
  HighlightTitleProps
> = ({ value, highlightText }) => {
  if (typeof value === "undefined" || value === "") {
    return <span className="truncate">{value || "-"}</span>;
  }
  if (typeof highlightText === "undefined" || highlightText === "") {
    return <span className="truncate">{value || "-"}</span>;
  }
  if (value.includes(highlightText)) {
    const otherTexts = value.split(highlightText);
    return (
      <span>
        {otherTexts.map((text, index) => {
          if (index !== otherTexts.length - 1) {
            return (
              <span>
                {text}
                <span className="text-red-500 bg-yellow-200 dark:text-red-200 dark:bg-yellow-700">
                  {highlightText}
                </span>
              </span>
            );
          }
          return text;
        })}
      </span>
    );
  }
  return <span className="truncate">{value || "-"}</span>;
};

// 默认导出
export default HighlightTitle;
