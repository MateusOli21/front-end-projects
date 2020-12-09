import React from "react";

import { Container } from "./styles";

const SectionContainer = ({ children, altBg, id }) => {
  return (
    <Container id={id} altBg={altBg}>
      {children}
    </Container>
  );
};

export default SectionContainer;
