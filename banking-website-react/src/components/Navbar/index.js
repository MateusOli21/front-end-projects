import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import scrollToSection from "../../utils/scrollToSection";

import Button from "../Button";

import {
  Container,
  Logo,
  Nav,
  NavItems,
  NavItem,
  SignIn,
  MobileMenu,
} from "./styles";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <Container>
      <Logo onClick={() => scrollToSection("hero-section")}>DBank</Logo>

      <Nav isVisible={showMenu}>
        <NavItems>
          <NavItem onClick={() => scrollToSection("hero-section")}>
            Home
          </NavItem>
          <NavItem>Descubra</NavItem>
          <NavItem>Serviços</NavItem>
          <NavItem>Criar conta</NavItem>
          {showMenu && (
            <NavItem className="sign-in">
              <Button>Entrar</Button>
            </NavItem>
          )}
        </NavItems>
      </Nav>

      <MobileMenu onClick={handleToggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </MobileMenu>

      <SignIn>
        <Button>Entrar</Button>
      </SignIn>
    </Container>
  );
};

export default Navbar;
