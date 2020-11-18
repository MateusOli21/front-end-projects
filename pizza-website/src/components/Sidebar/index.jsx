import React from "react";

import {
  Container,
  Icon,
  CloseIcon,
  Menu,
  MenuLink,
  ButtonWrap,
  SidebarLink,
} from "./styles";

const Sidebar = ({ isOpen, toggleIsOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggleIsOpen} />
      </Icon>

      <Menu>
        <MenuLink to="/">Pizzas</MenuLink>
        <MenuLink to="/">Sobremesas</MenuLink>
        <MenuLink to="/">Todas opções</MenuLink>
      </Menu>

      <ButtonWrap>
        <SidebarLink to="/">Peça agora</SidebarLink>
      </ButtonWrap>
    </Container>
  );
};

export default Sidebar;
