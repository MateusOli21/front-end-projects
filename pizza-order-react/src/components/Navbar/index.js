import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { useContextValue } from "../../Context";

import { Container, HomeLink, Logo, LogoTitle, Nav } from "./styles";

const Navbar = () => {
  const { resetPizza } = useContextValue();

  return (
    <Container>
      <Logo onClick={resetPizza}>
        <FaPizzaSlice size={22} />
        <LogoTitle to="/">PizzaOrder</LogoTitle>
      </Logo>
      <Nav onClick={resetPizza}>
        <HomeLink to="/">Home</HomeLink>
      </Nav>
    </Container>
  );
};

export default Navbar;
