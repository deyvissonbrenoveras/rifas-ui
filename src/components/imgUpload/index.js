import React, { useState } from "react";
import { useField } from "formik";
import api from "../../services/api";
import { CameraOutlined } from "@ant-design/icons";
import { Container } from "./styles";
import { useEffect } from "react";

export default function ImgUpload({ name, submitName, label, ...rest }) {
  const [submitNameField, submitNameMeta, submitNameHelpers] =
    useField(submitName);
  const [field] = useField(name);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { setValue: submitNameSetValue } = submitNameHelpers;

  useEffect(() => {
    if (field.value && preview === null) {
      setFile(field.value.id);
      setPreview(field.value.url);
    }
  }, [field, preview]);

  async function handleChange(e) {
    const data = new FormData();
    data.append("image", e.target.files[0]);
    const response = await api.post("images", data);
    const { id, url } = response.data;
    setFile(id);
    submitNameSetValue(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor={submitName}>
        {label}
        <input
          type="file"
          accept="image/*"
          data-file={file}
          id={submitName}
          onChange={handleChange}
          {...rest}
        />
        {preview ? <img src={preview} alt={label || ""} /> : <CameraOutlined />}
      </label>
    </Container>
  );
}
