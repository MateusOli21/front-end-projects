import { BrowserRouter } from "react-router-dom";

import { DataProvider } from "./Context";
import Routes from "./routes";
import GlobalStyles from "./assets/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <GlobalStyles />
        <Routes />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
