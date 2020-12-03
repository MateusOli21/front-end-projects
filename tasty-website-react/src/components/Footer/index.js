import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import linksData from "./data";

import {
  Container,
  Content,
  LogoContainer,
  SocialMidias,
  LinksContainer,
  Links,
  LinkTitle,
  LinkItem,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <h1>Tasty Food</h1>
          <p>Restaurante</p>
          <SocialMidias>
            <FaFacebookF size={22} />
            <FaInstagram size={22} />
            <FaTwitter size={22} />
          </SocialMidias>
        </LogoContainer>
        <LinksContainer>
          {linksData.map((item) => (
            <Links key={item.title}>
              <LinkTitle>{item.title}</LinkTitle>
              {item.links.map((link, index) => (
                <LinkItem href={link.to} key={index}>
                  {link.name}
                </LinkItem>
              ))}
            </Links>
          ))}
          <Links>
            <LinkTitle>Endereço</LinkTitle>
            <p>São Paulo, SP</p>
            <p>112345-6789</p>
            <p>tastyfood@email.com</p>
          </Links>
        </LinksContainer>
      </Content>
    </Container>
  );
};

export default Footer;
