import React, { useEffect, useState } from "react";
import { PageHeader, Row, Col } from "antd";
import { Form, SubmitButton } from "formik-antd";
import history from "../../../services/history";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRaffleRequest,
  updateRaffleRequest,
} from "../../../redux/modules/raffle/actions";
import ImgUpload from "../../../components/imgUpload";
import { Formik } from "formik";
import { Input } from "../../../components";

import { raffleValidationSchema } from "../../../validations";

export default function UpdateRaffle({ match }) {
  const { id: raffleId } = match.params;
  const dispatch = useDispatch();
  const { raffle, loading } = useSelector((store) => store.raffle);

  const [raffleToUpdate, setRaffleToUpdate] = useState({});

  useEffect(() => {
    dispatch(loadRaffleRequest(raffleId));
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

  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="Atualizar rifa"
        subTitle="Visualize e altere a rifa"
      />
      <Row>
        <Col xs={24} md={18} lg={12}>
          <Formik
            validationSchema={raffleValidationSchema}
            initialValues={raffleToUpdate}
            enableReinitialize
            onSubmit={onSubmit}
            render={() => (
              <Form>
                <ImgUpload
                  label="Insira a imagem principal"
                  name="firstImage"
                  submitName="firstImageId"
                />
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
    </div>
  );
}
