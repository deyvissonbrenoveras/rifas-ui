import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col, Tabs, List, Card } from "antd";
import { Form, SubmitButton } from "formik-antd";
import history from "../../../services/history";
import { useDispatch, useSelector } from "react-redux";
import {
  DollarCircleOutlined,
  EditOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import {
  loadRaffleRequest,
  updateRaffleRequest,
} from "../../../redux/modules/raffle/actions";
import { loadOrdersByRaffleIdRequest } from "../../../redux/modules/order/actions";
import ImgUpload from "../../../components/imgUpload";
import { Formik } from "formik";
import { Input } from "../../../components";

import { raffleValidationSchema } from "../../../validations";

const { TabPane } = Tabs;

export default function UpdateRaffle({ match }) {
  const { id: raffleId } = match.params;
  const dispatch = useDispatch();
  const { raffle } = useSelector((store) => store.raffle);
  const { orders } = useSelector((store) => store.order);

  const [raffleToUpdate, setRaffleToUpdate] = useState({});

  useEffect(() => {
    dispatch(loadRaffleRequest(raffleId));
    dispatch(loadOrdersByRaffleIdRequest(raffleId));
  }, [raffleId, dispatch]);

  useEffect(() => {
    if (raffle) {
      const fileList = [];

      if (raffle.firstImage)
        fileList.push(mapToUploadObject(raffle.firstImage));
      if (raffle.secondImage)
        fileList.push(mapToUploadObject(raffle.secondImage));
      if (raffle.thirdImage)
        fileList.push(mapToUploadObject(raffle.thirdImage));

      setRaffleToUpdate({ ...raffle, fileList });
    }
  }, [raffle]);

  function mapToUploadObject(image) {
    return {
      uid: image.id || "",
      name: image.filename || "",
      response: "200",
      status: "done",
      url: image.url || "",
    };
  }

  function onSubmit(data, { setSubmitting }) {
    dispatch(updateRaffleRequest(raffleId, data));
    setSubmitting(false);
  }
  function onTabChange(key) {
    console.log(key);
  }

  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="Atualizar rifa"
        subTitle="Visualize e altere a rifa"
      />
      <Tabs defaultActiveKey="1" onChange={onTabChange}>
        <TabPane
          tab={
            <span>
              <EditOutlined />
              Visualizar e editar rifa
            </span>
          }
          key="1"
        >
          <Row>
            <Col xs={24} md={18} lg={12}>
              <Formik
                validationSchema={raffleValidationSchema}
                initialValues={raffleToUpdate}
                enableReinitialize
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
                      label="descrição"
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
        </TabPane>
        <TabPane
          tab={
            <span>
              <DollarCircleOutlined />
              Ver pedidos
            </span>
          }
          key="2"
        >
          {orders && (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                lg: 3,
                xl: 4,
                xxl: 4,
              }}
              dataSource={orders}
              renderItem={(order) => (
                <List.Item>
                  <Card
                    title="Pedido Nº x"
                    actions={[
                      <span
                        onClick={() => {
                          window.alert("oi");
                        }}
                      >
                        <CloseCircleTwoTone
                          twoToneColor="#ff0000"
                          key="cancel"
                        />
                        Rejeitar
                      </span>,
                      <span
                        onClick={() => {
                          window.alert("oi");
                        }}
                      >
                        <CheckCircleTwoTone twoToneColor="#52c41a" key="edit" />
                        Dar baixa como pago
                      </span>,
                    ]}
                  >
                    <div>Comprador: {order.name}</div>
                    <div>Telefone: {order.phone}</div>
                    <div>E-mail: {order.email}</div>
                    <div>Data do pedido: {order.createdAt}</div>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </TabPane>
      </Tabs>
    </div>
  );
}
