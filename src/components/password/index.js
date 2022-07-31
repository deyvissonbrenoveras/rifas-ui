import React from "react";
import { useField } from "formik";
import { Input as InputAntd, Form } from "formik-antd";
import { Label, ErrorMessage } from "../common";

export function InputPassword({
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
      <InputAntd.Password
        status={meta.error && "error"}
        name={name}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      <ErrorMessage>{meta.error}</ErrorMessage>
    </Label>
  );
}
