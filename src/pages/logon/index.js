import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, LogonBox, Form } from "./styles";

import { logonRequest } from "../../redux/modules/auth/actions";
function Logon() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: "", password: "" });

  async function handleSubmit(event) {
    const { email, password } = state;
    event.preventDefault();
    dispatch(logonRequest(email, password));
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
