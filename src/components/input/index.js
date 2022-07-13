import React from "react";
import { Input as InputAntd } from "formik-antd";
import { Label } from "./styles";

export default function Input({
  label,
  name,
  placeholder,
  type = "text",
  ...rest
}) {
  return (
    <Label>
      {label}
      <InputAntd name={name} placeholder={placeholder} type={type} {...rest} />
    </Label>
  );
}
