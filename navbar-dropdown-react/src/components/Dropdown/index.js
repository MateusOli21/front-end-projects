import React from "react";

import { Container, Item, PageLink } from "./styles";

const Dropdown = () => {
  return (
    <Container>
      <Item>
        <PageLink to="/marketing">Marketing</PageLink>
      </Item>
      <Item>
        <PageLink to="/design">Design</PageLink>
      </Item>
    </Container>
  );
};

export default Dropdown;
