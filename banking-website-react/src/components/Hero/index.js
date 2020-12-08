import React from "react";

import heroImage from "../../assets/images/credit-card.svg";
import Button from "../Button";

import {
  Container,
  Wrapper,
  Content,
  ImgContainer,
  Title,
  Sub,
} from "./styles";

const Hero = () => {
  return (
    <Container id="hero-section">
      <Wrapper>
        <Content>
          <Title>O Banco virtual feito para você</Title>
          <Sub>Cadastre-se agora e aproveite as nossas vantagens.</Sub>
          <Button bigger>Cadastre-se</Button>
        </Content>

        <ImgContainer>
          <img src={heroImage} alt="credit" />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};

export default Hero;
