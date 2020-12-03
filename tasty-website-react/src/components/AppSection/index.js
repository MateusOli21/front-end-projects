import React from "react";

import appImg from "../../assets/images/movil-app.png";
import appleStoreImg from "../../assets/images/app1.png";
import playStoreImg from "../../assets/images/app2.png";

import {
  Container,
  Content,
  ImageContainer,
  SectionTitle,
  Title,
  StoresContainer,
  Description,
} from "./styles";

const AppSection = () => {
  return (
    <Container id="app-section">
      <Content>
        <SectionTitle>App</SectionTitle>
        <Title>Baixe o nosso app</Title>
        <Description>
          Baixe o nosso app na loja. Com ele é possível fazer reservas, pedidos,
          rastrear seu pedido e muito mais.
        </Description>
        <StoresContainer>
          <img src={appleStoreImg} alt="apple store" />
          <img src={playStoreImg} alt="play store" className="play-store-img" />
        </StoresContainer>
      </Content>
      <ImageContainer>
        <img src={appImg} alt="mobile app" />
      </ImageContainer>
    </Container>
  );
};

export default AppSection;
