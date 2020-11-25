import React from "react";

import { Container, Item, PageLink } from "./styles";

const Dropdown = () => {
  return (
    <Container>
      <Item>
        <PageLink>Marketing</PageLink>
      </Item>
      <Item>
        <PageLink>Design</PageLink>
      </Item>
    </Container>
  );
};

export default Dropdown;
