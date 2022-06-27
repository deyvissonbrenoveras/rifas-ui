import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Logon from "./pages/logon";
import { store, persistor } from "./redux";
import history from "./services/history";

import DashboardLayout from "./pages/layouts/dashboardLayout";

import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css";
import CreateRaffle from "./pages/dashboard/createRaffle/";
import ViewRaffles from "./pages/dashboard/viewRaffles";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/logon">
              <Logon />
            </Route>
            <DashboardLayout>
              <Route exact path="/create-raffle">
                <CreateRaffle />
              </Route>
              <Route exact path="/view-raffles">
                <ViewRaffles />
              </Route>
              {/* <CreateRaffle /> */}
            </DashboardLayout>

            <Route exact path="/">
              <div>helloworld</div>
            </Route>
          </Switch>

          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
