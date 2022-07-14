import React from "react";
import { useField } from "formik";
import { DatePicker as DatePickerAntd } from "formik-antd";
import { Label, ErrorMessage } from "../common";

export function DatePicker({
  label,
  name,
  placeholder,
  type = "text",
  ...rest
}) {
  const [field, meta, helpers] = useField(name);
  return (
    <Label>
      {label}
      <DatePickerAntd
        status={meta.error && "error"}
        name={name}
        placeholder={placeholder}
        type={type}
        style={{ display: "block" }}
        {...rest}
      />
      <ErrorMessage>{meta.error}</ErrorMessage>
    </Label>
  );
}
