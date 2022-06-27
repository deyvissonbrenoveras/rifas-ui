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
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
