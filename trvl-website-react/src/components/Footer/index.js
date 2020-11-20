import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import { linksData } from "./data";

import {
  Container,
  FooterLinks,
  Heading,
  InputArea,
  LinksItems,
  LinksWrapper,
  Subscription,
  Text,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Subscription>
        <Heading>
          Junte-se a nossa newsletter para receber nossas melhores ofertas de
          férias
        </Heading>
        <Text>Você pode se desinscrever a qualquer momento</Text>

        <InputArea>
          <input type="email" name="email" placeholder="Seu e-mail" />
          <Button btnStyle="secondary">Inscreva-se</Button>
        </InputArea>
      </Subscription>

      <FooterLinks>
        <LinksWrapper>
          {linksData.map((link, index) => (
            <LinksItems key={index}>
              <h2>{link.section}</h2>
              {link.items.map((item, index) => (
                <Link to={item.path} key={index}>
                  {item.text}
                </Link>
              ))}
            </LinksItems>
          ))}
        </LinksWrapper>
      </FooterLinks>
    </Container>
  );
};

export default Footer;
