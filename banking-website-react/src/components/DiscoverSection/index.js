import React from "react";

import SectionContainer from "../SectionContainer";
import Wrapper from "../ContentWrapper";
import ContentContainer from "../ContentContainer";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";
import Button from "../Button";
import Image from "../Image";
import SectionTitle from "../SectionTitle";

import savingsImage from "../../assets/images/savings.svg";

const DiscoverSection = () => {
  return (
    <SectionContainer id="discover-section">
      <Wrapper>
        <ContentContainer>
          <SectionTitle>Acesso Ilimitado</SectionTitle>
          <Headline>Acesse sua conta em qualquer lugar</Headline>
          <SubHeadline>
            Acesse a sua conta de qualquer lugar e a qualquer hora. Você só
            precisa de um conexão com internet e seu celular ou computador.
          </SubHeadline>
          <Button bigger secondary>
            Saiba mais
          </Button>
        </ContentContainer>

        <Image source={savingsImage} alt="business" />
      </Wrapper>
    </SectionContainer>
  );
};

export default DiscoverSection;
