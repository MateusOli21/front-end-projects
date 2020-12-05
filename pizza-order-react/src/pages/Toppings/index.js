import React from "react";

import Layout from "../_layout";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";
import { useContextValue } from "../../Context";

import moveXButton from "../../assets/animations/moveXButton";
import moveXOption from "../../assets/animations/moveXOption";
import moveXNegButton from "../../assets/animations/moveXNegButton";
import pageMoveX from "../../assets/animations/pageMoveX";
import whileHoverOption from "../../assets/animations/whileHoverOption";

import {
  Content,
  Title,
  ToppingsContainer,
  Topping,
  ButtonContainer,
} from "./styles";

const Toppings = () => {
  const { pizza, addTopping } = useContextValue();

  const toppings = [
    "azeitonas",
    "tomates",
    "cebola",
    "queijo",
    "calabresa",
    "frango",
  ];

  return (
    <Layout>
      <Content
        variants={pageMoveX}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Title>Escolha os igredientes desejados</Title>
        <ToppingsContainer>
          {toppings.map((topping, index) => (
            <Topping
              key={index}
              variants={moveXOption}
              whileHover={whileHoverOption}
              className={pizza.toppings.includes(topping) && "active"}
              onClick={() => addTopping(topping)}
            >
              {topping}
            </Topping>
          ))}
        </ToppingsContainer>
        <ButtonContainer>
          {pizza.toppings.length > 0 && (
            <Button path="/order" variants={moveXButton}>
              Finalizar pedido
            </Button>
          )}
          <BackButton path="/base" variants={moveXNegButton}>
            Voltar
          </BackButton>
        </ButtonContainer>
      </Content>
    </Layout>
  );
};

export default Toppings;
