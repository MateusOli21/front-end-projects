import React from "react";

import { Container } from "./styles";

const Button = ({ children, larger }) => {
  return <Container larger={larger}>{children}</Container>;
};

export default Button;
