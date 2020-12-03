import React from "react";

import aboutImg from "../../assets/images/about.jpg";
import Button from "../Button";

import {
  Container,
  Content,
  SectionTitle,
  Title,
  P,
  ImageContainer,
} from "./styles";

const AboutSection = () => {
  return (
    <Container id="about-section">
      <Content>
        <SectionTitle>Sobre nós</SectionTitle>
        <Title>Nós cozinhamos a melhor comida</Title>
        <P>
          Nós cozinhamos a melhor comida da cidade, com excelente serviço ao
          cliente, as melhores refeições e melhores pratos.
        </P>
        <Button>Explore mais</Button>
      </Content>
      <ImageContainer>
        <img src={aboutImg} alt="ingredients" />
      </ImageContainer>
    </Container>
  );
};

export default AboutSection;
