import React from "react"
import Button from "../Button"

import { Buttons, Container } from "./styles"

const Hero = () => {
  return (
    <Container>
      <h1>Viaje mais</h1>
      <p>Planeje sua próxima viagem hoje</p>
      <Buttons>
        <Button btnStyle="primary" btnSize="big" btnFont="big">
          Comece agora
        </Button>
      </Buttons>
    </Container>
  )
}

export default Hero
