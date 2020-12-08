import React from "react";

import { Container, Title, GoldenDiv } from "./styles";

function SectionTitle({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <GoldenDiv />
    </Container>
  );
}

export default SectionTitle;
