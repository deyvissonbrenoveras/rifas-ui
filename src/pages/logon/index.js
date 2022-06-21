import { Container, LogonBox } from "./styles";

function Logon() {
  return (
    <Container>
      <LogonBox>
        <h1>Logon</h1>
        <input name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="senha" />
      </LogonBox>
    </Container>
  );
}

export default Logon;
