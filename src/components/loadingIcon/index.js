import React from "react";
import { Row, Col, Spin } from "antd";

export default function LoadingIcon() {
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col xs={2}>
        <Spin size="large" />
      </Col>
    </Row>
  );
}
