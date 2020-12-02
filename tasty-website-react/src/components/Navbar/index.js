import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Container,
  Content,
  Logo,
  MobileMenu,
  Nav,
  NavMenu,
  Item,
} from "./styles";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleWindowScroll = () =>
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);

  const handleToggleMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    handleWindowScroll();
    window.addEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <Container>
      <Content isScrolled={scroll}>
        <Logo>Tasty</Logo>

        <MobileMenu onClick={handleToggleMenu}>
          {activeMenu ? <FaTimes /> : <FaBars />}
        </MobileMenu>

        <Nav isActive={activeMenu}>
          <NavMenu>
            <Item>Home</Item>
            <Item>Sobre</Item>
            <Item>Serviços</Item>
            <Item>Menu</Item>
            <Item>Contato</Item>
          </NavMenu>
        </Nav>
      </Content>
    </Container>
  );
};

export default Navbar;
