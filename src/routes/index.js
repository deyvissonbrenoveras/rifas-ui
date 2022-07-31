import { Switch } from "react-router-dom";
import Route from "./Route";

import Logon from "../pages/logon";
import CreateRaffle from "../pages/dashboard/createRaffle";
import ViewRaffles from "../pages/dashboard/viewRaffles";
import UpdateRaffle from "../pages/dashboard/updateRaffle";
import OrderRaffle from "../pages/orderRaffle";

import DashboardLayout from "../pages/layouts/dashboardLayout";
import OrderRaffleLayout from "../pages/layouts/orderRaffleLayout";
import CreateAccount from "../pages/createAccount";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/logon" component={Logon} />
      <Route exact path="/create-account" component={CreateAccount} />
      <Route
        exact
        path="/create-raffle"
        component={CreateRaffle}
        layout={DashboardLayout}
        authRequired
      />
      <Route
        exact
        path="/update-raffle/:id"
        component={UpdateRaffle}
        layout={DashboardLayout}
        authRequired
      />
      <Route
        exact
        path="/view-raffles"
        component={ViewRaffles}
        layout={DashboardLayout}
        authRequired
      />

      <Route
        exact
        path="/order-raffle/:id"
        component={OrderRaffle}
        layout={OrderRaffleLayout}
      />

      <Route exact path="/" component={<div>helloworld</div>} />
    </Switch>
  );
}
