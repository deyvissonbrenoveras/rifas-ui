import React from "react";
import { PageHeader, Row, Col } from "antd";
import { Form, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import history from "../../../services/history";
import { useDispatch } from "react-redux";
import { createRaffleRequest } from "../../../redux/modules/raffle/actions";
import { ImageUpload } from "../../../components/imageUpload";
import { Input, DatePicker } from "../../../components";

import { raffleValidationSchema } from "../../../validations";

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
              firstImageId: 5,
              title: "",
              description: "",
              quotaExpirationDate: "",
              quotaPrice: "",
              quotaQuantity: "",
              allowedQuotasPerPurchase: "",
              categoryId: 1,
            }}
            validationSchema={raffleValidationSchema}
            onSubmit={onSubmit}
            render={() => (
              <Form>
                {/* <ImageUpload
                  label="Insira as imagens"
                  firstImageName="firstImageId"
                  secondImageName="secondImageId"
                  thirdImageName="thirdImageId"
                /> */}
                <Input name="title" placeholder="Título" label="Título" />
                <Input
                  name="description"
                  placeholder="Descrição"
                  label="Descrição"
                />
                <DatePicker
                  name="quotaExpirationDate"
                  label="Data da expiração da quota"
                  placeholder="Data da expiração da quota"
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
