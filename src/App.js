import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Logon from "./pages/logon";
import GlobalStyle from "./styles/globalStyle";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/logon" element={<Logon />} />
          <Route path="/" element={<div>helloworld</div>} />
        </Routes>
      </Provider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
