import React from "react";
import { BiCart } from "react-icons/bi";

import {
  Container,
  ImageContainer,
  Content,
  Plate,
  Title,
  Description,
  Price,
  CartButton,
} from "./styles";

const MenuCard = ({ plate }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={plate.image} alt={plate.title} />
      </ImageContainer>
      <Content>
        <Plate>
          <Title>{plate.title}</Title>
          <Description>
            <p>{plate.description}</p>
          </Description>
          <Price>R$ {plate.price.toFixed(2)}</Price>
        </Plate>
        <CartButton>
          <button>
            <BiCart />
          </button>
        </CartButton>
      </Content>
    </Container>
  );
};

export default MenuCard;
