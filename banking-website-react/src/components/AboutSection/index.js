import React from "react";

import SectionContainer from "../SectionContainer";
import Wrapper from "../ContentWrapper";
import ContentContainer from "../ContentContainer";
import Headline from "../Headline";
import SubHeadline from "../SubHeadline";
import Button from "../Button";
import Image from "../Image";
import SectionTitle from "../SectionTitle";

import aboutImage from "../../assets/images/business.svg";

const AboutSection = () => {
  return (
    <SectionContainer id="about-section">
      <Wrapper>
        <ContentContainer>
          <SectionTitle>Banco Premium</SectionTitle>
          <Headline>Transferências ilimitadas e com taxa zero</Headline>
          <SubHeadline>
            Tenha acesso ao nosso app e faça transferências ilimitadas para
            qualquer banco sem taxa de cobrança.
          </SubHeadline>
          <Button bigger secondary>
            Comece agora
          </Button>
        </ContentContainer>

        <Image source={aboutImage} alt="business" invertOrder="true" />
      </Wrapper>
    </SectionContainer>
  );
};

export default AboutSection;
