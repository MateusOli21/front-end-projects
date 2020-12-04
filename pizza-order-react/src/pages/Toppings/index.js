import React from "react";
import Button from "../../components/Button";
import { useContextValue } from "../../Context";
import Layout from "../_layout";

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
      <Content>
        <Title>Escolha os igredientes desejados</Title>
        <ToppingsContainer>
          {toppings.map((topping, index) => (
            <Topping
              key={index}
              className={pizza.toppings.includes(topping) && "active"}
              onClick={() => addTopping(topping)}
            >
              {topping}
            </Topping>
          ))}
        </ToppingsContainer>
        <ButtonContainer>
          <Button path="/order">Finalizar pedido</Button>
        </ButtonContainer>
      </Content>
    </Layout>
  );
};

export default Toppings;
