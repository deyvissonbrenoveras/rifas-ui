import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logon from "./pages/logon";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/logon" element={<Logon />} />
        <Route path="/" element={<div>helloworld</div>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
