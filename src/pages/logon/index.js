import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import api from "./../../services/api";
import authSlice from "../../store/reducers/authReducer";

import { Container, LogonBox, Form } from "./styles";
function Logon() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: "", password: "" });
  const token = useSelector((store) => store.auth.token);

  useEffect(() => {
    console.log(token);
  }, [token]);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("auth", state);
    const token = response.data.token;
    dispatch(authSlice.actions.setToken(token));
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
