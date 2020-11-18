import React from "react";
import Navbar from "../Navbar";

import {
  Container,
  HeroContent,
  HeroItems,
  Text,
  Title,
  Button,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Navbar />

      <HeroContent>
        <HeroItems>
          <Title>A melhor pizza de todas</Title>
          <Text>Pronta em 60 segundos</Text>
          <Button>Faça seu pedido</Button>
        </HeroItems>
      </HeroContent>
    </Container>
  );
};

export default Hero;
