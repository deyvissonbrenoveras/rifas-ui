import React, { useEffect, useState, useRef } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useField } from "formik";
import { Upload, Form } from "antd";
import api from "../../services/api";

export function ImageUpload({
  firstImageName,
  secondImageName,
  thirdImageName,
  defaultValueName,
}) {
  const [firstImageField, firstImageMeta, firstImageHelpers] =
    useField(firstImageName);
  const [secondImageField, secondImageMeta, secondImageHelpers] =
    useField(secondImageName);
  const [thirdImageField, thirdImageMeta, thirdImageHelpers] =
    useField(thirdImageName);

  const [defaultValueField, defaultValueMeta, defaultValueHelpers] =
    useField(defaultValueName);

  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState(defaultValueField.value);

  useEffect(() => {
    if (defaultValueField.value) {
      setFileList(defaultValueField.value);
    }
  }, [defaultValueField.value]);

  useEffect(() => {
    if (fileList) {
      const firstImageId = fileList[0] ? fileList[0].uid : null;
      const secondImageId = fileList[1] ? fileList[1].uid : null;
      const thirdImageId = fileList[2] ? fileList[2].uid : null;

      firstImageHelpers.setValue(firstImageId);
      secondImageHelpers.setValue(secondImageId);
      thirdImageHelpers.setValue(thirdImageId);
    }
  }, [fileList]);

  function setData(image) {
    setFileList([
      ...fileList,
      {
        uid: image.id || "",
        name: image.filename || "",
        response: "200",
        status: "done",
        url: image.url || "",
      },
    ]);
  }

  async function handleChange(e) {
    setLoading(true);
    const data = new FormData();
    data.append("image", e.file);
    const response = await api.post("images", data);
    setData(response.data);
    // e.onSuccess(response.data, e.file);
    setLoading(false);
  }

  return (
    <>
      <Upload
        listType="picture-card"
        maxCount={3}
        customRequest={handleChange}
        fileList={fileList}
        onChange={(e) => {
          if (e) {
            setFileList(e.fileList);
          }
        }}
      >
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
    </>
  );
}
