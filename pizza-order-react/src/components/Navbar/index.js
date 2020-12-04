import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

import { Container, Logo, LogoTitle } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <FaPizzaSlice size={22} />
        <LogoTitle to="/">PizzaOrder</LogoTitle>
      </Logo>
    </Container>
  );
};

export default Navbar;
