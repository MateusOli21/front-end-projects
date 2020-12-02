import React from "react";

import { Container, IconContainer, Title, Description } from "./styles";

const ServiceCard = ({ service }) => {
  return (
    <Container>
      <IconContainer>
        <img src={service.icon} alt="icon" />
      </IconContainer>
      <Title>{service.title}</Title>
      <Description>
        <p>{service.description}</p>
      </Description>
    </Container>
  );
};

export default ServiceCard;
