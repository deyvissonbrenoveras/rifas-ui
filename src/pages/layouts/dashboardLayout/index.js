import React from "react";

import { WrapperContainer, Layout, Header } from "./styles";

export default function DashboardLayout({ children }) {
  return (
    <Layout>
      <WrapperContainer>
        <Header>
          <h1>Logo</h1>
        </Header>
        {children}
      </WrapperContainer>
    </Layout>
  );
}
