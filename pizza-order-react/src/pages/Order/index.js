import React from "react";

import { useContextValue } from "../../Context";
import Layout from "../_layout";

import {
  Content,
  Title,
  Description,
  ToppingsContainer,
  Topping,
} from "./styles";

const Order = () => {
  const { pizza } = useContextValue();

  console.log(pizza);

  return (
    <Layout>
      <Content>
        <Title>Agradecemos pelo seu pedido!</Title>
        <Description>
          Você pediu uma pizza {pizza.base.toLowerCase()} com:
        </Description>
        <ToppingsContainer>
          {pizza.toppings.map((topping, index) => (
            <Topping key={index}>{topping}</Topping>
          ))}
        </ToppingsContainer>
      </Content>
    </Layout>
  );
};

export default Order;
