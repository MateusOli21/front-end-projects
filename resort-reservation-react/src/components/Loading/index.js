import React from "react";

import loadingGif from "../../assets/images/gif/loading-arrow.gif";

import { Container, LoadingTitle } from "./styles";

function Loading() {
  return (
    <Container>
      <LoadingTitle>Carregando dados dos quartos...</LoadingTitle>
      <img src={loadingGif} alt="loading" />
    </Container>
  );
}

export default Loading;
