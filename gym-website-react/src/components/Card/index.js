import React from "react";
import { HiCheckCircle } from "react-icons/hi";

import { Container, Content, Button, Title, Description, Item } from "./styles";

const Card = ({ plan }) => {
  const Icon = plan.icon;

  return (
    <Container>
      <Content>
        <Icon />
        <Title>{plan.name}</Title>

        <Description>
          {plan.features.map((feature, index) => (
            <Item key={index}>
              <HiCheckCircle size={16} className="item-icon" />
              <span>{feature}</span>
            </Item>
          ))}
        </Description>

        <span className="price">R${plan.price}</span>
      </Content>

      <Button>Matricular-se</Button>
    </Container>
  );
};

export default Card;
