import React, { useEffect, useState } from "react";
import moment from "moment";
import { PageHeader } from "antd";
import { Form, SubmitButton, DatePicker } from "formik-antd";
import history from "../../../services/history";
import { useDispatch, useSelector } from "react-redux";
import { loadRaffleRequest } from "../../../redux/modules/raffle/actions";
import { ImageUpload } from "../../../components/imageUpload new";
import { Formik } from "formik";
import Input from "../../../components/input";

export default function UpdateRaffle({ match }) {
  const dispatch = useDispatch();
  const { raffle, loading } = useSelector((store) => store.raffle);

  const [raffleToUpdate, setRaffleToUpdate] = useState({});

  useEffect(() => {
    const { id } = match.params;

    dispatch(loadRaffleRequest(id));
  }, [match, dispatch]);

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
    console.log(data);
    setSubmitting(false);
  }

  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="Atualizar rifa"
        subTitle="Visualize e altere a rifa"
      />
      <Formik
        initialValues={raffleToUpdate}
        enableReinitialize
        onSubmit={onSubmit}
        render={() => (
          <Form>
            <ImageUpload
              label="Insira as imagens"
              firstImageName="firstImageId"
              secondImageName="secondImageId"
              thirdImageName="thirdImageId"
              defaultValueName="fileList"
            />
            <Input name="title" placeholder="Título" label="Título" />
            <Input
              name="description"
              placeholder="Descrição"
              label="descrição"
            />
            <DatePicker
              name="quotaExpirationDate"
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
    </div>
  );
}
