import React from "react";

import phoneImg from "../../assets/images/pic1.svg";

import {
  Button,
  Container,
  Content,
  ImageContainer,
  TextContainer,
  Title,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>
            A nova geração <strong> tecnológica</strong>
          </Title>

          <p>Veja o que faz a diferença para nós</p>
        </TextContainer>
        <Button>Comece agora</Button>
      </Content>

      <ImageContainer>
        <img src={phoneImg} alt="phone" />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
