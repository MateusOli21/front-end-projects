import React from "react";

import Button from "../Button";
import ContentContainer from "../ContentContainer";
import Headline from "../Headline";
import Image from "../Image";
import SubHeadline from "../SubHeadline";
import Wrapper from "../ContentWrapper";

import heroImage from "../../assets/images/credit-card.svg";

import { Container } from "./styles";

const HeroSection = () => {
  return (
    <Container id="hero-section">
      <Wrapper>
        <ContentContainer>
          <Headline>O Banco virtual feito para você</Headline>
          <SubHeadline>
            Crie a sua conta agora e aproveite as nossas vantagens
          </SubHeadline>
          <Button bigger>Cadastre-se</Button>
        </ContentContainer>

        <Image source={heroImage} alt="credit card" />
      </Wrapper>
    </Container>
  );
};

export default HeroSection;
