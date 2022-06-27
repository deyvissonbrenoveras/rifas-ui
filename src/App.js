import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Logon from "./pages/logon";
import GlobalStyle from "./styles/globalStyle";
import store from "./redux";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/logon">
            <Logon />
          </Route>
          <Route exact path="/">
            <div>helloworld</div>
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
