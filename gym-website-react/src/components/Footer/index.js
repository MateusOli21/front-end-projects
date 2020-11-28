import React from "react";

import {
  Container,
  Content,
  LogoContent,
  LinksWrapper,
  LinkSection,
  LinkItem,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <LogoContent>
          <h1>Frontier Fitness</h1>
          <p>Localizada em São Paulo, SP</p>
          <p>(11)2233-4455</p>
        </LogoContent>

        <LinksWrapper>
          <LinkSection>
            <LinkItem>
              <h1>Contatos</h1>
            </LinkItem>
            <LinkItem>
              <a href="/">Contato</a>
            </LinkItem>
            <LinkItem>
              <a href="/">Suporte</a>
            </LinkItem>
            <LinkItem>
              <a href="/">Patrocinadores</a>
            </LinkItem>
          </LinkSection>

          <LinkSection>
            <LinkItem>
              <h1>Membros</h1>
            </LinkItem>
            <LinkItem>
              <a href="/">Preço</a>
            </LinkItem>
            <LinkItem>
              <a href="/">Planos</a>
            </LinkItem>
            <LinkItem>
              <a href="/">FAQ</a>
            </LinkItem>
          </LinkSection>

          <LinkSection>
            <LinkItem>
              <h1>Mídias socias</h1>
            </LinkItem>
            <LinkItem>
              <a href="/">Instagram</a>
            </LinkItem>
            <LinkItem>
              <a href="/">Twitter</a>
            </LinkItem>
            <LinkItem>
              <a href="/">Facebook</a>
            </LinkItem>
          </LinkSection>
        </LinksWrapper>
      </Content>
    </Container>
  );
};

export default Footer;
