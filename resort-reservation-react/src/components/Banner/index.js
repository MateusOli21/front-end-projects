import React from "react";

import { Container, Title, Subtitle, GoldDiv } from "./styles";

function Banner({ children, title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <GoldDiv />
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
}

export default Banner;
