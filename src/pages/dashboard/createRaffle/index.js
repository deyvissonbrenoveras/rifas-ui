import React from "react";
import { PageHeader } from "antd";
import history from "../../../services/history";

export default function CreateRaffle() {
  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="Criar rifa"
        subTitle="crie uma rifa"
      />
    </div>
  );
}
