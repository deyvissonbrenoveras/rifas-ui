import React, { useEffect, useState } from "react";
import history from "../../../services/history";
import { Row, Col, List, Space, PageHeader, Divider, Button, Spin } from "antd";
import {
  LikeOutlined,
  AimOutlined,
  DollarCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadAllRafflesRequest } from "../../../redux/modules/raffle/actions";
import LoadingIcon from "../../../components/loadingIcon";
import RaffleStatusEnum from "../../../enums/RaffleStatusEnum";
export default function ViewRaffles() {
  const dispatch = useDispatch();
  const { loading, raffles } = useSelector((store) => store.raffle);
  const [rafflesToShow, setRafflesToShow] = useState([]);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(() => {
    dispatch(loadAllRafflesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (raffles) {
      setRafflesToShow(
        raffles.map((raffle) => ({
          ...raffle,
          translatedStatus: getStatus(raffle.status),
        }))
      );
    }
  }, [raffles]);

  function getStatus(raffleStatusEnum) {
    switch (raffleStatusEnum) {
      case RaffleStatusEnum.IN_PROGRESS:
        return "Em andamento";
      case RaffleStatusEnum.CLOSED:
        return "Encerrada";
      case RaffleStatusEnum.WAITING_FOR_PAYMENT:
        return "Aguardando pagamento";
      default:
        return "";
    }
  }

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      <Row>
        <Col xs={24}>
          <PageHeader
            onBack={() => history.goBack()}
            title="Ver rifas"
            subTitle="veja todas as suas rifas"
          />
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size="large"
            onClick={() => history.push("/create-raffle")}
          >
            Criar nova rifa
          </Button>
          <Divider />
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {},
              pageSize: 10,
            }}
            dataSource={rafflesToShow}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText
                    icon={AimOutlined}
                    text={`Quotas: ${item.quotaQuantity}`}
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={DollarCircleOutlined}
                    text={`Preço: ${item.quotaPrice}`}
                    key="list-vertical-like-o"
                  />,
                ]}
                extra={
                  <img
                    alt="logo"
                    style={{
                      width: "100%",
                      maxWidth: 300,
                      maxHeight: 200,
                    }}
                    src={item.firstImage ? item.firstImage.url : ""}
                  />
                }
                onClick={() => {
                  history.push(`/update-raffle/${item.id}`);
                }}
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.translatedStatus}
                />
                {item.description}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
