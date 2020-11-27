import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Container, Logo, MobileIcons, Menu, Item, PageLink } from "./styles";

const Navbar = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const toggleMobileMenu = () => setActiveMobileMenu(!activeMobileMenu);

  return (
    <Container>
      <Logo>Frontier</Logo>

      <Menu isClicked={activeMobileMenu}>
        <Item>
          <PageLink>Home</PageLink>
        </Item>
        <Item>
          <PageLink>Serviços</PageLink>
        </Item>
        <Item>
          <PageLink>Planos</PageLink>
        </Item>
        <Item>
          <PageLink>Treinamentos</PageLink>
        </Item>
      </Menu>

      <MobileIcons onClick={toggleMobileMenu}>
        {activeMobileMenu ? <FaTimes /> : <FaBars />}
      </MobileIcons>
    </Container>
  );
};

export default Navbar;
