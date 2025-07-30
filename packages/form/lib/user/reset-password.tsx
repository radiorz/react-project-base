/**
 * @author
 * @file reset-password.tsx
 * @fileBase reset-password
 * @path packages\ready-form\lib\reset-password.tsx
 * @from
 * @desc
 * @example
 */

import React from 'react';
import {
  Form,
  FormItem,
  NumberPicker,
  ArrayTable,
  Editable,
  Input,
} from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
export interface ResetPasswordValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// export interface ResetPasswordProps {
// value: any
// }
export const ResetPasswordSchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    Input,
    NumberPicker,
    ArrayTable,
  },
});
export const resetPasswordSchema = {
  type: 'object',
  properties: {
    oldPassword: {
      type: 'string',
      title: '旧密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input.Password',
      'x-component-props': {
        className: 'w-full mb-4',
      },
      'x-validator': [{ required: true, message: '请输入旧密码' }],
    },
    newPassword: {
      type: 'string',
      title: '新密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input.Password',
      'x-component-props': {
        className: 'w-full mb-4',
      },
      'x-validator': [
        { required: true, message: '请输入新密码' },
        { minLength: 6, message: '密码长度不能少于6位' },
      ],
    },
    confirmPassword: {
      type: 'string',
      title: '确认新密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input.Password',
      'x-component-props': {
        className: 'w-full mb-4',
      },
      'x-validator': [
        { required: true, message: '请确认新密码' },
        ({ form }) => ({
          validator(_, value) {
            if (value !== form.values.newPassword) {
              return new Error('两次密码输入不一致');
            }
            return true;
          },
        }),
      ],
    },
  },
};
const resetPasswordForm = createForm<ResetPasswordValues>();

export interface ResetPasswordFormProps {
  onSubmit: (values: ResetPasswordValues) => void;
  children?: React.ReactNode;
}
export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  children,
}) => {
  return (
    <Form form={resetPasswordForm}>
      <ResetPasswordSchemaField schema={resetPasswordSchema} />
      {children}
    </Form>
  );
};

// 默认导出
export default ResetPasswordForm;
