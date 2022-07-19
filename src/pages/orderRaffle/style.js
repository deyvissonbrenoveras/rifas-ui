import styled from "styled-components";
import { Carousel as CarouselAntd, Row, Image } from "antd";

export const Container = styled(Row)`
  h1 {
    text-align: center;
  }
`;

export const Img = styled(Image)`
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 300px;
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
  width: 99%;
  max-height: 250px;
  font-size: 20px;
  padding: 5px;
  margin: 10px 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Quotas = styled.div`
  padding: 5px;
`;

export const QuotasFilterContainer = styled.div`
  padding: 5px;
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
