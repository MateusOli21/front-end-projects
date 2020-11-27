import React from "react";

import { Container, Content, Button } from "./styles";

const Hero = ({ heroBg }) => {
  return (
    <Container bgImage={heroBg}>
      <Content>
        <h1>Frontier Fitness</h1>
        <p> Junte-se agora por R$60,00</p>
        <Button>Fazer matrícula</Button>
      </Content>
    </Container>
  );
};

export default Hero;
