import React from "react"
import { DiScala } from "react-icons/di"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import {
  Container,
  Content,
  MainLogo,
  WebsiteRights,
  SocialMidiaLinks,
  Link,
} from "./styles"

const Footer = () => {
  return (
    <Container>
      <Content>
        <MainLogo>
          <DiScala />
          <span>Explor</span>
        </MainLogo>

        <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>

        <SocialMidiaLinks>
          <Link href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </Link>
          <Link href="/" target="_blank" aria-label="Youtube">
            <FaYoutube />
          </Link>
          <Link href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </Link>
          <Link href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </SocialMidiaLinks>
      </Content>
    </Container>
  )
}

export default Footer
