import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Logon from "./pages/logon";
import GlobalStyle from "./styles/globalStyle";
import { store, persistor } from "./redux";
import history from "./services/history";

import "react-toastify/dist/ReactToastify.css";
import CreateRaffle from "./pages/dashboard/createRaffle";
import DashboardLayout from "./pages/layouts/dashboardLayout";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <DashboardLayout>
              <Route exact path="/logon">
                <Logon />
              </Route>
              <Route exact path="/create-raffle">
                <CreateRaffle />
              </Route>
            </DashboardLayout>

            <Route exact path="/">
              <div>helloworld</div>
            </Route>
          </Switch>

          <ToastContainer autoClose={3000} />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
