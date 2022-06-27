import React, { useState } from "react";
import history from "../../../services/history";
import "./styles.css";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  AppstoreAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">logo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
            <Link to="/create-raffle"> Criar rifa</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            <Link to="/view-raffles">Ver rifas</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: 5,
            minHeight: 280,
            overflow: "scroll",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
