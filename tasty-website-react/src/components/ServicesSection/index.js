import React from "react";
import ServiceCard from "../ServiceCard";
import servicesData from "./data";

import { Container, SectionTitle, Title, Items } from "./styles";

const ServicesSection = () => {
  return (
    <Container>
      <SectionTitle>O que oferecemos</SectionTitle>
      <Title>Nossos maravilhosos serviços</Title>
      <Items>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </Items>
    </Container>
  );
};

export default ServicesSection;
