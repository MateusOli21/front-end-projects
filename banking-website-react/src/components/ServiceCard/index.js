import React from "react";

import { Container, Title, Description, Image } from "./styles";

const ServiceCard = ({ card }) => {
  return (
    <Container>
      <Image src={card.image} />
      <Title>{card.headline}</Title>
      <Description>{card.description}</Description>
    </Container>
  );
};

export default ServiceCard;
