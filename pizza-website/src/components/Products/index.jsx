import React from "react";

import {
  Container,
  Heading,
  Wrapper,
  ProductCard,
  ProductImg,
  Info,
  Title,
  Description,
  Price,
  Button,
} from "./styles";

const Products = ({ heading, data }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>

      <Wrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.image} alt={product.alt} />
            <Info>
              <Title>{product.title}</Title>
              <Description>{product.description}</Description>
              <Price>R$ {product.price}</Price>

              <Button>{product.button}</Button>
            </Info>
          </ProductCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
