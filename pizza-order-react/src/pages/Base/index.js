import React from "react";

import { useContextValue } from "../../Context";
import Layout from "../_layout";
import Button from "../../components/Button";

import {
  Content,
  Title,
  OptionsContainer,
  Option,
  ButtonContainer,
} from "./styles";

const Base = () => {
  const { addBase, pizza } = useContextValue();

  const bases = ["Clássica", "Fina e crocante", "Grossa"];

  return (
    <Layout>
      <Content>
        <Title>Escolha a massa desejada</Title>
        <OptionsContainer>
          {bases.map((base, index) => (
            <Option
              className={pizza.base === base && "active"}
              key={index}
              onClick={() => addBase(base)}
            >
              {base}
            </Option>
          ))}
        </OptionsContainer>
        {pizza.base && (
          <ButtonContainer>
            <Button path="/toppings">Próximo</Button>
          </ButtonContainer>
        )}
      </Content>
    </Layout>
  );
};

export default Base;
