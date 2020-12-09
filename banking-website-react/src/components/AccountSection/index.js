import React from "react";

import SectionContainer from "../SectionContainer";
import Wrapper from "../ContentWrapper";
import ContentContainer from "../ContentContainer";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";
import Button from "../Button";
import Image from "../Image";
import SectionTitle from "../SectionTitle";

import AccountImage from "../../assets/images/transfer.svg";

const AccountSection = () => {
  return (
    <SectionContainer id="account-section">
      <Wrapper>
        <ContentContainer>
          <SectionTitle>Junte-se a nós</SectionTitle>
          <Headline>Criar um conta é muito fácil</Headline>
          <SubHeadline>
            Crie a sua conta de forma rápida e prática. Você só precisa do seu
            e-mail e dos seus dados.
          </SubHeadline>
          <Button bigger>Criar conta</Button>
        </ContentContainer>

        <Image source={AccountImage} alt="business" invertOrder="true" />
      </Wrapper>
    </SectionContainer>
  );
};

export default AccountSection;
