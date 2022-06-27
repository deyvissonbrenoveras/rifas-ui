import React from "react";

import { Label } from "./styles";

export default function Input({ label, value, setValue, name, ...rest }) {
  function handleChange(e) {
    setValue({ ...value, [name]: e.target.value });
  }
  return (
    <Label>
      {label}
      <input value={value[name]} {...rest} onChange={handleChange} />
    </Label>
  );
}
