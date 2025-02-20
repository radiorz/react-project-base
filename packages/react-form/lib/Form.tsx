/**
 * @author
 * @file Form.tsx
 * @fileBase Form
 * @path packages\react-form\lib\Form.tsx
 * @from
 * @desc
 * @example
 */

import { useState, useEffect, memo } from "react";
import { useImageSize } from "../../react-ui - 副本/lib/image-size/useImageSize";
export function useFormConfig(
  schema: Record<string, any>,
  ui: Record<string, any>
) {
  return {};
}
interface FieldUI {
  label: string;
  labelSuffix: string;
  placeholder: string;
  errorMessage: string;
  required: boolean;
}
interface FieldSchema extends FieldUI {
  type: string;
  name: string;
  required: boolean;
  enum: string[];
  min: number;
  max: number;
  minLength: number;
  maxLength: number;
  readonly: boolean;
  pattern: string;
  format: string;
  default: any;
  description: string;
  items: FieldSchema;
  properties: Record<string, FieldSchema>;
  additionalProperties: boolean;
}
export interface FormProps {
  schema: Record<string, any>;
  ui: Record<string, any>;
}
export const Form: React.FC<FormProps> = ({ schema, ui }) => {
  const { formList } = useFormConfig(schema, ui);
  return (
    <div>
      {formList.map((item, index) => {
        return <Field {...item}></Field>;
      })}
    </div>
  );
};

// 默认导出
export default Form;
