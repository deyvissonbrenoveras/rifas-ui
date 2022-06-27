import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogonBox = styled.div`
  background: #3f4e4f;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 800px;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    border: 0;
    border-radius: 15px;
    height: 30px;
    margin: 10px;
  }

  button {
    width: 100%;
    max-width: 200px;
    height: 35px;
    margin-top: 15px;
    background-color: #0f3460;
    color: white;
    border: 0;
    border-radius: 15px;
  }
`;
