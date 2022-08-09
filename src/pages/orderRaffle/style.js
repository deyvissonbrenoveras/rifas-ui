import styled from "styled-components";
import { Carousel as CarouselAntd, Row, Image } from "antd";

export const Container = styled(Row)`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    228deg,
    rgba(255, 255, 255, 1) 63%,
    rgba(246, 246, 246, 1) 100%
  );
  h1 {
    text-align: center;
    margin: 40px 0;
  }
`;

export const Img = styled(Image)`
  text-align: center;
  width: 100%;
  max-width: 500px;
  max-height: 300px;
`;

export const Carousel = styled(CarouselAntd)`
  height: 300px;
  background-color: rgba(232, 232, 232, 0.5);
  text-align: center;

  .slick-track {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Description = styled.div`
  width: 97%;
  max-height: 250px;
  font-size: 20px;
  padding: 5px;
  margin: 10px 5px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
`;

export const QuotaPrice = styled.div`
  font-size: 22px;
  padding: 5px 15px;
  margin: 10px 5px;
  text-align: right;
`;

export const Quotas = styled.div`
  margin: 30px 0;
  padding: 5px;
`;

export const QuotasFilterContainer = styled.div`
  padding: 15px;
  margin-bottom: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuotasContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Quota = styled.span`
  background-color: ${(props) => {
    if (props.available) {
      if (props.selected) {
        return "#1890ff";
      }
      return "#0ac259";
    }
    return "#e8e8e8";
  }};
  color: ${(props) => (props.available ? "#fff" : "#aba9a9")};
  width: 60px;
  display: block;
  cursor: ${(props) => (props.available ? "pointer" : "default")};
  margin: 5px;
  border-radius: 5px;
  text-align: center;
`;
