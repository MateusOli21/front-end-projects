import React, { useState } from "react";
import { SiTypo3 } from "react-icons/si";
import { FaTimes, FaBars } from "react-icons/fa";

import {
  Container,
  Content,
  MainIcon,
  MenuIcon,
  NavItem,
  NavLink,
  Menu,
} from "./styles";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);

  const toggleNav = () => setIsOpen(!isOpen);

  const handleShowButton = () =>
    window.innerWidth <= 960 ? setButtonActive(false) : setButtonActive(true);

  window.addEventListener("resize", handleShowButton);

  return (
    <Container>
      <Content>
        <MainIcon to="/">
          <span>TRVL</span>
          <SiTypo3 size={22} />
        </MainIcon>

        <Menu isOpen={isOpen}>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Serviços</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Produtos</NavLink>
            </NavItem>
          </ul>

          {buttonActive ? (
            <Button btnStyle="secondary">Faça Login</Button>
          ) : (
            <MenuIcon onClick={toggleNav}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </MenuIcon>
          )}
        </Menu>
      </Content>
    </Container>
  );
};

export default Navbar;
