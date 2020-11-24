import React from "react";

import cardOneImg from "../../assets/images/pic3.jpg";
import cardTwoImg from "../../assets/images/pic4.jpg";

import {
  CardsContainer,
  Container,
  Title,
  Card,
  CardContent,
  Button,
} from "./styles";

const Services = () => {
  return (
    <Container>
      <Title>Veja sobre o que falamos</Title>

      <CardsContainer>
        <Card>
          <img src={cardOneImg} alt="Man with virtual reality glasses" />
          <CardContent>
            <h1>Experimente se aventurar</h1>
            <p>Tecnologias para VR</p>
            <Button>Comece agora</Button>
          </CardContent>
        </Card>

        <Card>
          <img src={cardTwoImg} alt="Man with virtual reality glasses" />
          <CardContent>
            <h1>Você está pronto?</h1>
            <p>Dê o salto</p>
            <Button>Comece agora</Button>
          </CardContent>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Services;
