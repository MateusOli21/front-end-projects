import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Dropdown from "../Dropdown";

import { Container, Item, Logo, Menu, MobileIcons, PageLink } from "./styles";

const Navbar = () => {
  const [isMenuClicked, setMenuClicked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMenuClicked(!isMenuClicked);

  const toggleOpenDropdown = () => setDropdownOpen(true);

  const toggleCloseDropdown = () => setDropdownOpen(false);

  return (
    <Container>
      <Logo>
        <h1>Epic Web</h1>
      </Logo>

      <Menu isClicked={isMenuClicked}>
        <Item>
          <PageLink to="/">Home</PageLink>
        </Item>
        <Item
          onMouseEnter={toggleOpenDropdown}
          onMouseLeave={toggleCloseDropdown}
        >
          <PageLink to="/services">Serviços</PageLink>
          {isDropdownOpen && <Dropdown />}
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
