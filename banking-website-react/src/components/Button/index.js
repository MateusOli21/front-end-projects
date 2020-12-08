import React from "react";

import { Container } from "./styles";

const Button = ({ children, secondary, bigger }) => {
  return (
    <Container secondary={secondary} bigger={bigger}>
      {children}
    </Container>
  );
};

export default Button;
