import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

import scrollToSection from "../../utils/scrollToSection";

import {
  Container,
  Content,
  Logo,
  MobileMenu,
  Nav,
  NavMenu,
  Item,
  ThemeSwitcher,
} from "./styles";

const Navbar = ({ toggleCurrentTheme }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [toggledTheme, setToggleTheme] = useState(false);

  const handleWindowScroll = () =>
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);

  const handleToggleMenu = () => setActiveMenu(!activeMenu);

  const handleToggleThemeIcon = () => setToggleTheme(!toggledTheme);

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
            <Item onClick={() => scrollToSection("#hero-section")}>Home</Item>
            <Item onClick={() => scrollToSection("#about-section")}>Sobre</Item>
            <Item onClick={() => scrollToSection("#services-section")}>
              Serviços
            </Item>
            <Item onClick={() => scrollToSection("#menu-section")}>Menu</Item>
            <Item onClick={() => scrollToSection("#app-section")}>App</Item>
            <Item onClick={() => scrollToSection("#contact-section")}>
              Contato
            </Item>
            <Item>
              <ThemeSwitcher
                onClick={() => {
                  toggleCurrentTheme();
                  handleToggleThemeIcon();
                }}
              >
                {toggledTheme ? <FiSun /> : <FiMoon />}
              </ThemeSwitcher>
            </Item>
          </NavMenu>
        </Nav>
      </Content>
    </Container>
  );
};

export default Navbar;
