/**
 * @author
 * @file select-input.tsx
 * @fileBase select-input
 * @path packages\ui-shadcn\src\form\select-input.tsx
 * @from
 * @desc
 * @example
 */

import { useState, memo } from "react";
// 引入 Shadcn UI 组件
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
} from "@/components/ui/select";

// 定义组件属性
export interface SelectInputProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleSelectChange = (selectedValue: string) => {
    setInputValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Select value={inputValue} onValueChange={handleSelectChange}>
      <SelectTrigger>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="请选择或输入"
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

// 默认导出
export default SelectInput;
