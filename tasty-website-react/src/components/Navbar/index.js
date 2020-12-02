import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

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
            <Item>Home</Item>
            <Item>Sobre</Item>
            <Item>Serviços</Item>
            <Item>Menu</Item>
            <Item>Contato</Item>
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
