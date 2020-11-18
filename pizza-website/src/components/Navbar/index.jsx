import React from "react";

import { Container, NavLink, NavIcon, Bars } from "./styles";

const Navbar = ({ isOpen, toggleIsOpen }) => {
  return (
    <Container>
      <NavLink to="/">Pizzas</NavLink>
      <NavIcon onClick={toggleIsOpen}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Container>
  );
};

export default Navbar;
