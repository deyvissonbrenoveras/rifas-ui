import React, { useState } from "react";
import api from "./../../services/api";

import { Container, LogonBox, Form } from "./styles";
function Logon() {
  const [state, setState] = useState({ email: "", password: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
    const response = await api.post("auth", state);
    console.log(response);
  }
  return (
    <Container>
      <LogonBox>
        <h1>Logon</h1>
        <Form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="e-mail"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="senha"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <button type="submit">Entrar</button>
        </Form>
      </LogonBox>
    </Container>
  );
}

export default Logon;
