/**
 * @author
 * @file SearchInput.jsx
 * @fileBase SearchInput
 * @path src\components\SearchInput.jsx
 * @from
 * @desc
 * @example
 */

import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
export interface SearchInputProps{ 
  value?: string;
  onChange: (value: string) => void;
  [key: string]: any;
}
// FIXME 这里会遇到可控和非可控的问题

export function SearchInput({ value, onChange,...props }: SearchInputProps) {
  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}  
      prefix={<SearchOutlined />}
      suffix={value ? <CloseOutlined onClick={() => onChange("")} /> : null}
    />
  );
}

export default SearchInput;
