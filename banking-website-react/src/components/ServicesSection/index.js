import React from "react";

import Wrapper from "../ContentWrapper";
import Headline from "../Headline";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";
import services from "./data";

import { CardsContainer } from "./styles";

const ServicesSection = () => {
  return (
    <SectionContainer altBg id="services-section">
      <Wrapper column>
        <SectionTitle>Serviços</SectionTitle>
        <Headline alt="true">Algumas de nossas vantagens</Headline>
        <CardsContainer>
          {services.map((service) => (
            <ServiceCard key={service.id} card={service} />
          ))}
        </CardsContainer>
      </Wrapper>
    </SectionContainer>
  );
};

export default ServicesSection;
