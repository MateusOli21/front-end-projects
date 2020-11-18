import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";

import { GlobalStyles } from "./style/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
