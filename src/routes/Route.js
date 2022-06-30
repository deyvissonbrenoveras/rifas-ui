import React from "react";
import { Route as OriginalRoute } from "react-router-dom";

export default function Route({ component: Component, layout: Layout, rest }) {
  return Layout ? (
    <Layout>
      <OriginalRoute component={Component} {...rest} />
    </Layout>
  ) : (
    <OriginalRoute component={Component} {...rest} />
  );
}
