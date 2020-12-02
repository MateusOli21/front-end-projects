import React from "react";

import homeImg from "../../assets/images/home.png";
import Button from "../Button";

import { Container, Content, Subtitle, Texts, Title, Image } from "./styles";

const Hero = () => {
  return (
    <Container>
      <Content>
        <Texts>
          <Title>Tasty </Title>
          <Subtitle>Experimente a melhor comida da semana.</Subtitle>
        </Texts>
        <Button>Veja o menu</Button>
      </Content>
      <Image src={homeImg} alt="plate" />
    </Container>
  );
};

export default Hero;
