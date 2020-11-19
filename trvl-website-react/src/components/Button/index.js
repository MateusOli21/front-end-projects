import React from "react";

import { Container } from "./styles";

const Button = ({ children, btnStyle, btnSize, onClick }) => {
  return <Container btnStyle={btnStyle} btnSize={btnSize} onClick={onClick}>{children}</Container>;
};




export default Button;
