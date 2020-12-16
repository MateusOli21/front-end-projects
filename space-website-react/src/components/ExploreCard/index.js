import React from "react";

import { Container, Content, Image } from "./styles";

const ExploreCard = ({ card }) => {
  return (
    <Container>
      <Image>
        <img src={card.image} alt={card.title} />
      </Image>
      <Content>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
      </Content>
    </Container>
  );
};

export default ExploreCard;
