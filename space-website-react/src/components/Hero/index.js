import React from "react";

import heroImg from "../../assets/images/moon.svg";
import Button from "../Button";

import { Container, Content } from "./styles";

const Hero = () => {
  return (
    <Container id="hero-section">
      <Content>
        <h1>Explore o espaço</h1>
        <p>
          Descubra e explore os diversos planetas do nosso sistema solar e muito
          mais.
        </p>
        <Button larger>Explore agora</Button>
      </Content>

      <div className="img-container">
        <img src={heroImg} alt="astronaut" />
      </div>
    </Container>
  );
};

export default Hero;
