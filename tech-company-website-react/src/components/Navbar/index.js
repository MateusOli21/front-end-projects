import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";

import {
  Container,
  LogoContainer,
  NavbarToggle,
  Menu,
  Item,
  PageLink,
  SignButton,
} from "./styles";

const Navbar = () => {
  const [isMenuClicked, setMenuClicked] = useState(false);

  const toggleMenu = () => setMenuClicked(!isMenuClicked);

  return (
    <Container>
      <LogoContainer to="/">
        <span>TechNxt</span>
        <RiVipDiamondFill size={24} />
      </LogoContainer>

      <Menu isClicked={isMenuClicked}>
        <Item>
          <PageLink to="/">Home</PageLink>
        </Item>
        <Item>
          <PageLink to="/tech">Tech</PageLink>
        </Item>
        <Item>
          <PageLink to="/products">Produtos</PageLink>
        </Item>
        <SignButton>Entrar</SignButton>
      </Menu>

      <NavbarToggle onClick={toggleMenu}>
        {isMenuClicked ? <FaTimes /> : <FaBars />}
      </NavbarToggle>
    </Container>
  );
};

export default Navbar;
