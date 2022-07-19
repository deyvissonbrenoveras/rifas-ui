import React from "react";
import { Row, Col } from "antd";

export default function OrderRaffleLayout({ children }) {
  return (
    <Row align="center" style={{ height: "100vh" }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10} style={{ height: "100%" }}>
        {children}
      </Col>
    </Row>
  );
}
