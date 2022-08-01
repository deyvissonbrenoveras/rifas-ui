import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { Formik } from "formik";
import { Form, SubmitButton } from "formik-antd";
import { Input } from "../../components";
import { Row, Col } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { InputPassword } from "../../components/password";
import { createAccountValidationSchema } from "../../validations/createAccountValidation";

import { createUserRequest } from "../../redux/modules/user/actions";

import "./styles.css";

export default function CreateAccount() {
  const dispatch = useDispatch();
  function onSubmit(data, { setSubmitting }) {
    dispatch(createUserRequest(data));
    setSubmitting(false);
  }
  return (
    <>
      <Row justify="center" align="center">
        <h1>Criar conta</h1>
        <Col span={24}>
          <Row justify="center" align="center">
            <Col xs={24} sm={12} md={8} lg={6}>
              <Formik
                validationSchema={createAccountValidationSchema}
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                }}
                enableReinitialize
                onSubmit={onSubmit}
                render={() => (
                  <Form>
                    <Input
                      name="name"
                      placeholder="Digite seu nome"
                      label="Nome"
                    />
                    <Input
                      name="email"
                      placeholder="Digite seu e-mail"
                      label="E-mail"
                      prefix={<UserOutlined />}
                    />
                    <InputPassword
                      name="password"
                      placeholder="Digite sua senha"
                      label="Senha"
                    />
                    <InputPassword
                      name="passwordConfirmation"
                      placeholder="Digite sua senha novamente"
                      label="Confirmação de senha"
                    />
                    <SubmitButton type="primary" shape="round" block>
                      Criar conta
                    </SubmitButton>
                  </Form>
                )}
              />
              <Link to="logon" className="link">
                Já possui uma conta? clique aqui para entrar
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
