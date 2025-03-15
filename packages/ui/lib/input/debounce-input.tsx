import { memo, useState } from "react";
import SearchInput from "./search-input";
import { debounce } from "lodash-es";
// DebounceInput
export interface DebounceInputProps {
  // value: string;
  className?: string;
  onSearch?: (value: string) => void;
  debounceTime?: number;
  [key: string]: any;
}
export const DebounceInput = memo(
  ({ className, onSearch, debounceTime, ...props }: DebounceInputProps) => {
    const [value, setValue] = useState<string>("");
    const debounceChange = debounce((value) => {
      onSearch?.(value);
    }, debounceTime || 250);
    const handleChange = (value: string) => {
      setValue(value);
      debounceChange(value);
    };
    return (
      <SearchInput
        {...props}
        className={className}
        placeholder="输入关键词查找节点..."
        onChange={handleChange}
        value={value}
      />
    );
  }
);
