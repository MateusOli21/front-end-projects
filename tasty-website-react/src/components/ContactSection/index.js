import React from "react";
import Button from "../Button";

import { Container, Content, SectionTitle, Title, Description } from "./styles";

const ContactSection = () => {
  return (
    <Container id="contact-section">
      <Content>
        <SectionTitle>Contato</SectionTitle>
        <Title>Vamos conversar</Title>
        <Description>
          Se você quiser reservar um mesa no restaurante, entre em contato e te
          atenderemos rapidamente com nosso chat 24h.
        </Description>
      </Content>
      <Button>Entre em contato</Button>
    </Container>
  );
};

export default ContactSection;
