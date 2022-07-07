import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, Input, Form } from "antd";
import api from "../../services/api";

export function ImageUpload({ name, label, ...rest }) {
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    setLoading(true);
    console.log(e);
    const data = new FormData();
    data.append("image", e.file);
    const response = await api.post("images", data);
    e.onSuccess(response.data, e.file);
  }

  return (
    <>
      <Form.Item
        name={name}
        label={label}
        getValueFromEvent={(e) => {
          if (e.file.status === "done") {
            setLoading(false);
            return e.file.response.id;
          }
        }}
      >
        <Upload
          listType="picture-card"
          maxCount={1}
          customRequest={handleChange}
          {...rest}
        >
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
    </>
  );
}
