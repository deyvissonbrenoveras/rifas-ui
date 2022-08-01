import React, { useState } from "react";
import { Input, Button, Row, Col, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logonRequest } from "../../redux/modules/auth/actions";

import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.css";

function Logon() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.auth.loading);

  async function handleSubmit(data) {
    const { email, password } = data;
    dispatch(logonRequest(email, password));
  }
  return (
    <>
      <Row justify="center" align="center">
        <h1>Entrar</h1>
        <Col span={24}>
          <Row justify="center" align="center">
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form onFinish={handleSubmit}>
                <Form.Item name="email">
                  <Input
                    placeholder="e-mail"
                    size="large"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item name="password">
                  <Input.Password placeholder="senha" />
                </Form.Item>

                <Button
                  htmlType="submit"
                  type="primary"
                  shape="round"
                  block
                  loading={loading}
                >
                  Entrar
                </Button>
              </Form>
              <Link to="create-account" className="link">
                Ainda não possui uma conta? clique aqui para criar
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Logon;
