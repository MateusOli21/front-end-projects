import React from "react";

import { Container, Content, Input, Button, FormArea } from "./styles";

const NewsLetterSection = ({ bgImage }) => {
  return (
    <Container bgImage={bgImage}>
      <Content>
        <h1>Assine a nossa newsletter e tenha acesso ao grupo privado</h1>
        <FormArea>
          <Input type="email" placeholder="Seu e-mail" />
          <Button>Assinar agora</Button>
        </FormArea>
      </Content>
    </Container>
  );
};

export default NewsLetterSection;
