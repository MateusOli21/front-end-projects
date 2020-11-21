import React from "react"

import { Container } from "./styles"

const Button = ({ children, btnStyle, btnSize, btnFont }) => {
  return (
    <Container btnStyle={btnStyle} btnSize={btnSize} btnFont={btnFont}>
      {children}
    </Container>
  )
}

export default Button
