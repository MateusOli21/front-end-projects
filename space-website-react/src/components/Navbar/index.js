import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import scrollToSection from "../../utils/scrollToSection";

import { Container, Logo, Nav, NavMobile } from "./styles";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleToggleMenu = () => setNavActive(!navActive);

  return (
    <Container id="navbar-container">
      <Logo onClick={() => scrollToSection("#navbar-container")}>
        <h1>Exp</h1>
        <h2>Space</h2>
      </Logo>

      <Nav isActive={navActive}>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Sobre</li>
        </ul>
      </Nav>

      <NavMobile onClick={handleToggleMenu}>
        {navActive ? <FaTimes /> : <FaBars />}
      </NavMobile>
    </Container>
  );
};

export default Navbar;
