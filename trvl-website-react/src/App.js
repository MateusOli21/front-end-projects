import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
