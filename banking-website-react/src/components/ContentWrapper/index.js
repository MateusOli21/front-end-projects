import React from "react";

import { Container } from "./styles";

const Wrapper = ({ children, column }) => {
  return <Container column={column}>{children}</Container>;
};

export default Wrapper;
