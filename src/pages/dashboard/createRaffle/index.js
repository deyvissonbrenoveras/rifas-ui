import React from "react";
import { PageHeader, Row, Col } from "antd";
import { Form, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import history from "../../../services/history";
import { useDispatch } from "react-redux";
import { createRaffleRequest } from "../../../redux/modules/raffle/actions";
import { Input } from "../../../components";

import { raffleValidationSchema } from "../../../validations";
import ImgUpload from "../../../components/imgUpload";

export default function CreateRaffle() {
  const dispatch = useDispatch();

  function onSubmit(data, { setSubmitting }) {
    dispatch(createRaffleRequest(data));
    setSubmitting(false);
  }

  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="Criar rifa"
        subTitle="crie uma rifa"
      />
      <Row>
        <Col xs={24} md={18} lg={12}>
          <Formik
            initialValues={{
              firstImageId: 1,
              title: "",
              description: "",
              quotaExpirationInDays: "",
              quotaPrice: "",
              quotaQuantity: "",
              allowedQuotasPerPurchase: "",
              categoryId: 1,
            }}
            validationSchema={raffleValidationSchema}
            onSubmit={onSubmit}
            render={() => (
              <Form>
                <Row justify="space-around">
                  <Col xs={24} sm={10} md={8}>
                    <ImgUpload
                      label="Insira a imagem principal"
                      name="firstImage"
                      submitName="firstImageId"
                    />
                  </Col>
                  <Col xs={24} sm={10} md={8}>
                    <ImgUpload
                      label="Insira a imagem secundária"
                      name="secondImage"
                      submitName="secondImageId"
                    />
                  </Col>
                  <Col xs={24} sm={10} md={8}>
                    <ImgUpload
                      label="Insira a última imagem"
                      name="thirdImage"
                      submitName="thirdImageId"
                    />
                  </Col>
                </Row>
                <Input name="title" placeholder="Título" label="Título" />
                <Input
                  name="description"
                  placeholder="Descrição"
                  label="Descrição"
                />
                <Input
                  name="quotaExpirationInDays"
                  label="Quantidade de dias para expiração da quota não paga"
                  placeholder="Quantidade de dias para expiração da quota não paga"
                  type="number"
                />
                <Input
                  name="quotaPrice"
                  placeholder="Preço da quota"
                  label="Preço da quota"
                  type="number"
                  prefix="R$"
                  suffix="Reais"
                />
                <Input
                  name="quotaQuantity"
                  placeholder="Quantidade de quotas"
                  label="Quantidade de quotas"
                  type="number"
                />
                <Input
                  name="allowedQuotasPerPurchase"
                  placeholder="Quotas permitidas por compra"
                  label="Quotas permitidas por compra"
                  type="number"
                />
                <Input
                  name="categoryId"
                  placeholder="Id de categoria"
                  label="Id de categoria"
                />
                <SubmitButton>enviar</SubmitButton>
              </Form>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}
