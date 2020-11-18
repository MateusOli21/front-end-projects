import React from "react";

import { Container, NavLink, NavIcon, Bars } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/">Pizzas</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Container>
  );
};

export default Navbar;
