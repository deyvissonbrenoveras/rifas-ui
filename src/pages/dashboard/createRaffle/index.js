import React, { useState } from "react";

import { Container, Form } from "./styles";
import Input from "../../../components/input";
import { useDispatch } from "react-redux";
import { createRaffleRequest } from "../../../redux/modules/raffle/actions";

export default function CreateRaffle() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    description: "",
    quotaQuantity: 100,
    quotaPrice: 1,
    allowedQuotasPerPurchase: 20,
    categoryId: 2,
    firstImageId: 2,
    secondImageId: 3,
    thirdImageId: 4,
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createRaffleRequest(form));
    console.log(form);
  }

  return (
    <Container>
      <h1>Criar nova rifa</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Título"
          name="title"
          placeholder="Insira um título"
          value={form}
          setValue={setForm}
        />
        <Input
          label="Descrição"
          name="description"
          placeholder="Insira uma descrição"
          value={form}
          setValue={setForm}
        />
        <Input
          label="Quantidade de cotas"
          name="quotaQuantity"
          placeholder="Insira a quantidade de cotas"
          type="number"
          minValue={1}
          maxValue={10000}
          value={form}
          setValue={setForm}
        />
        <Input
          label="Preço da quota"
          name="quotaPrice"
          placeholder="Insira o preço de cada cota"
          type="number"
          minValue={1}
          maxValue={10000}
          value={form}
          setValue={setForm}
        />
        <Input
          label="Quantidade de cotas permitidas por compra"
          name="allowedQuotasPerPurchase"
          placeholder="Insira o preço de cada cota"
          type="number"
          minValue={1}
          maxValue={10000}
          value={form}
          setValue={setForm}
        />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
