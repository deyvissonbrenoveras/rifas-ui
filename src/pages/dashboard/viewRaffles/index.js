import React, { useEffect } from "react";
import history from "../../../services/history";
import { Row, Col, List, Space, PageHeader, Divider, Button, Spin } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadAllRafflesRequest } from "../../../redux/modules/raffle/actions";
import LoadingIcon from "../../../components/loadingIcon";
export default function ViewRaffles() {
  const dispatch = useDispatch();
  const { loading, raffles } = useSelector((store) => store.raffle);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(() => {
    dispatch(loadAllRafflesRequest());
  }, [dispatch]);

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
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={raffles}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    style={{ maxWidth: "100%" }}
                    src={item.firstImage.url}
                  />
                }
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.status}
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
