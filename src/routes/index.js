import { Switch } from "react-router-dom";
import Route from "./Route";
import Logon from "../pages/logon";
import CreateRaffle from "../pages/dashboard/createRaffle";
import DashboardLayout from "../pages/layouts/dashboardLayout";
import ViewRaffles from "../pages/dashboard/viewRaffles";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/logon" component={Logon} />
      <Route
        exact
        path="/create-raffle"
        component={CreateRaffle}
        layout={DashboardLayout}
      />
      <Route
        exact
        path="/view-raffles"
        component={ViewRaffles}
        layout={DashboardLayout}
      />

      <Route exact path="/" component={<div>helloworld</div>} />
    </Switch>
  );
}
