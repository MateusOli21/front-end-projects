import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import {
  Container,
  HeroContent,
  HeroItems,
  Text,
  Title,
  Button,
} from "./styles";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar toggleIsOpen={toggleIsOpen} />
      <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

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
