import React from "react";

import { Container } from "./styles";

const Button = ({ children, path }) => {
  return <Container to={path}>{children}</Container>;
};

export default Button;
