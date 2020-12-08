import React from "react";
import { Router } from "react-router-dom";

import { RoomProvider } from "./Context/RoomContext";

import Routes from "./routes/routes";
import history from "./services/history";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <RoomProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </RoomProvider>
  );
}

export default App;
