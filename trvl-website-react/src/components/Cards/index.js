import React from "react";

import { cardsData } from "./data";
import Card from "../Card";

import { Container, Content, CardsWrapper, Items } from "./styles";

const Cards = () => {
  return (
    <Container>
      <h1>Dê uma olhada nesses destinos épicos</h1>

      <Content>
        <CardsWrapper>
          <Items>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                source={card.source}
                text={card.text}
                label={card.label}
                path={card.label}
              />
            ))}
          </Items>
        </CardsWrapper>
      </Content>
    </Container>
  );
};

export default Cards;
