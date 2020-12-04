import React from "react";

import { Container, PageLink } from "./styles";

const Button = ({ children, path, variants }) => {
  return (
    <Container variants={variants} initial="hidden" animate="visible">
      <PageLink to={path}>{children}</PageLink>
    </Container>
  );
};

export default Button;
