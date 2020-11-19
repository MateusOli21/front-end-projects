import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
