import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  layout: Layout,
  authRequired,
  ...rest
}) {
  const signed = useSelector((store) => store.auth.signed);

  if (authRequired && !signed) {
    return <Redirect to="/logon" />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        Layout ? (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
