import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0 0 10px 10px;
  max-width: 1200px;
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-color: white;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
