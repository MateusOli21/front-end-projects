import React from "react";
import ExploreCard from "../ExploreCard";
import cardsData from "./data";

import { Container, Content, CardsContainer } from "./styles";

const ExploreSection = () => {
  return (
    <Container id="explore-section">
      <Content>
        <p>Explore</p>
        <h1>Descubra um infinidade de possibilidades</h1>
      </Content>

      <CardsContainer>
        {cardsData.map((card) => (
          <ExploreCard key={card.id} card={card} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default ExploreSection;
