import React from "react";
import moveXNegButton from "../../assets/animations/moveXNegButton";

import moveYTitle from "../../assets/animations/moveYTitle";
import pageMoveX from "../../assets/animations/pageMoveX";

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

  return (
    <Layout>
      <Content
        variants={pageMoveX}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Title>Agradecemos pelo seu pedido!</Title>
        <Description variants={moveYTitle}>
          Você pediu uma pizza {pizza.base.toLowerCase()} com:
        </Description>
        <ToppingsContainer>
          {pizza.toppings.map((topping, index) => (
            <Topping key={index} variants={moveXNegButton}>
              {topping}
            </Topping>
          ))}
        </ToppingsContainer>
      </Content>
    </Layout>
  );
};

export default Order;
