import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import footerData from "./data";
import scrollToSection from "../../utils/scrollToSection";

import {
  Container,
  Content,
  LinkItem,
  LinkTitle,
  LinksWrapper,
  LinksBlock,
  MediasContainer,
  MediasWrapper,
  Logo,
  Rights,
} from "./styles";

const FooterSection = () => {
  return (
    <Container>
      <Content>
        <LinksWrapper>
          {footerData.map((block) => (
            <LinksBlock key={block.id}>
              <LinkItem>
                <LinkTitle>{block.title}</LinkTitle>
              </LinkItem>
              {block.links.map((link) => (
                <LinkItem key={link.name}>{link.name}</LinkItem>
              ))}
            </LinksBlock>
          ))}
        </LinksWrapper>

        <MediasContainer>
          <Logo onClick={() => scrollToSection("hero-section")}>DBank</Logo>
          <Rights>
            DBank &copy; {new Date().getFullYear()} | Todos os direitos
            reservados
          </Rights>
          <MediasWrapper>
            <FaFacebook className="media-icon" size={22} />
            <FaInstagram className="media-icon" size={22} />
            <FaLinkedin className="media-icon" size={22} />
            <FaTwitter className="media-icon" size={22} />
            <FaYoutube className="media-icon" size={22} />
          </MediasWrapper>
        </MediasContainer>
      </Content>
    </Container>
  );
};

export default FooterSection;
