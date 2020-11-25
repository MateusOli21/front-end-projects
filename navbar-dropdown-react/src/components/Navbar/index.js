import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Container, Item, Logo, Menu, MobileIcons, PageLink } from "./styles";

const Navbar = () => {
  const [isMenuClicked, setMenuClicked] = useState(false);

  const toggleMobileMenu = () => setMenuClicked(!isMenuClicked);

  return (
    <Container>
      <Logo>
        <h1>Epic Web</h1>
      </Logo>

      <Menu isClicked={isMenuClicked}>
        <Item>
          <PageLink to="/">Home</PageLink>
        </Item>
        <Item>
          <PageLink to="/services">Serviços</PageLink>
        </Item>
        <Item>
          <PageLink to="/products">Produtos</PageLink>
        </Item>
      </Menu>

      <MobileIcons onClick={toggleMobileMenu}>
        {isMenuClicked ? <FaTimes /> : <FaBars />}
      </MobileIcons>
    </Container>
  );
};

export default Navbar;
