import React from "react";

import { Container } from "./styles";

const Hero = ({ imageBg, title }) => {
  return (
    <Container imageBg={imageBg}>
      <h1>{title}</h1>
    </Container>
  );
};

export default Hero;
