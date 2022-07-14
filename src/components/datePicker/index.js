import React from "react";
import { DatePicker as DatePickerAntd, Form } from "formik-antd";
import { Label } from "../common";

export function DatePicker({
  label,
  name,
  placeholder,
  type = "text",
  ...rest
}) {
  return (
    <Label>
      {label}
      <Form.Item name={name}>
        <DatePickerAntd
          name={name}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
      </Form.Item>
    </Label>
  );
}
