import React from "react";

import homeImg from "../../assets/images/home.png";
import Button from "../Button";

import { Container, Content, Subtitle, Texts, Title, Image } from "./styles";

const Hero = () => {
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Container id="hero-section">
      <Content initial="hidden" animate="visible" variants={contentVariants}>
        <Texts>
          <Title>Tasty </Title>
          <Subtitle>Experimente a melhor comida da semana.</Subtitle>
        </Texts>
        <Button>Veja o menu</Button>
      </Content>
      <Image
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img src={homeImg} alt="plate" />
      </Image>
    </Container>
  );
};

export default Hero;
