import React from "react";
import { PageHeader, Row, Col, Form, Input, Button, DatePicker } from "antd";
import history from "../../../services/history";
import { useDispatch } from "react-redux";
import { createRaffleRequest } from "../../../redux/modules/raffle/actions";
import { ImageUpload } from "../../../components/imageUpload";
export default function CreateRaffle() {
  const dispatch = useDispatch();

  function onFinish(data) {
    dispatch(createRaffleRequest(data));
  }

  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="Criar rifa"
        subTitle="crie uma rifa"
      />

      <Form
        onFinish={onFinish}
        initialValues={{
          categoryId: 1,
        }}
      >
        <Row>
          <Col xs={24}>
            <ImageUpload name="firstImageId" label="imagem 1" />
          </Col>
          <Col xs={24}>
            <ImageUpload name="secondImageId" label="imagem 2" />
          </Col>
          <Col xs={24}>
            <ImageUpload name="thirdImageId" label="imagem 3" />
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={8}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "O título é obrigatório!" }]}
            >
              <Input placeholder="Título" />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                { required: true, message: "A descrição é obrigatória!" },
              ]}
            >
              <Input.TextArea placeholder="Descrição" rows={5} />
            </Form.Item>
            <Form.Item
              name="quotaExpirationDate"
              rules={[{ required: true, message: "O título é obrigatório!" }]}
            >
              <DatePicker placeholder="Data da expiração da quota" />
            </Form.Item>
            <Form.Item
              name="quotaPrice"
              rules={[{ required: true, message: "O preço é obrigatório!" }]}
            >
              <Input
                placeholder="Preço da quota"
                type="number"
                prefix="R$"
                suffix="Reais"
              />
            </Form.Item>
            <Form.Item
              name="quotaQuantity"
              rules={[
                {
                  required: true,
                  message: "A quantidade de quotas é obrigatória!",
                },
              ]}
            >
              <Input placeholder="Quantidade de quotas" type="number" />
            </Form.Item>
            <Form.Item
              name="allowedQuotasPerPurchase"
              rules={[
                {
                  required: true,
                  message:
                    "A quantidade de quotas permitidas por compra é obrigatória!",
                },
              ]}
            >
              <Input placeholder="Quotas permitidas por compra" type="number" />
            </Form.Item>
            <Form.Item
              name="categoryId"
              rules={[{ required: true, message: "categoryId é obrigatório!" }]}
            >
              <Input placeholder="categoryId" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={8}>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
