import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin: 5px;
  label {
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
  }
  input {
    height: 200px;
    display: none !important;
  }
  img {
    width: 100%;
    max-width: 200px;
    min-height: 80px;
    object-fit: contain;
    margin: 10;
  }
  svg {
    font-size: 80px;
    color: #e3e3e3;
    margin: 0 auto;
  }
`;
