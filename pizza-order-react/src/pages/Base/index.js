import React from "react";

import { useContextValue } from "../../Context";
import Layout from "../_layout";
import Button from "../../components/Button";

import pageMoveX from "../../assets/animations/pageMoveX";
import moveXButton from "../../assets/animations/moveXButton";
import whileHoverOption from "../../assets/animations/whileHoverOption";

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
      <Content variants={pageMoveX} initial="hidden" animate="visible">
        <Title>Escolha a massa desejada</Title>
        <OptionsContainer>
          {bases.map((base, index) => (
            <Option
              key={index}
              whileHover={whileHoverOption}
              className={pizza.base === base && "active"}
              onClick={() => addBase(base)}
            >
              {base}
            </Option>
          ))}
        </OptionsContainer>
        <ButtonContainer>
          {pizza.base && (
            <Button path="/toppings" variants={moveXButton}>
              Próximo
            </Button>
          )}
        </ButtonContainer>
      </Content>
    </Layout>
  );
};

export default Base;
