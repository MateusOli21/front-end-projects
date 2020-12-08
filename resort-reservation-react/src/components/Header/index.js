import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import {
  Navbar,
  NavHeader,
  NavButton,
  MenuIcon,
  NavOptions,
  NavOption,
  NavLink,
} from "./styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <NavHeader>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <NavButton type="button" onClick={handleToggle}>
          <MenuIcon />
        </NavButton>
      </NavHeader>

      <NavOptions isOpen={isOpen}>
        <NavOption>
          <NavLink to="/">Início</NavLink>
        </NavOption>
        <NavOption>
          <NavLink to="/rooms">Quartos</NavLink>
        </NavOption>
      </NavOptions>
    </Navbar>
  );
}
