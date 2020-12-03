import React from "react";
import MenuCard from "../MenuCard";

import menuData from "./data";

import { Container, SectionTitle, Title, MenuContainer } from "./styles";

const MenuSection = () => {
  return (
    <Container id="menu-section">
      <SectionTitle>Menu</SectionTitle>
      <Title>O menu da semana</Title>
      <MenuContainer>
        {menuData.map((plate) => (
          <MenuCard key={plate.id} plate={plate} />
        ))}
      </MenuContainer>
    </Container>
  );
};

export default MenuSection;
