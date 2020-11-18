import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";

import { productData } from "./data";

import { GlobalStyles } from "./style/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Hero />
        <Products heading="Escolha a sua favorita" data={productData} />
      </div>
    </BrowserRouter>
  );
}

export default App;
