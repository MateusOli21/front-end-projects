import React from "react";

import { Container, CardLink, PicWrapper, Image, Infos, Title } from "./styles";

const Card = ({ source, text, label, path }) => {
  return (
    <Container>
      <CardLink to={path}>
        <PicWrapper data-category={label}>
          <Image src={source} alt="travel image" />
        </PicWrapper>

        <Infos>
          <Title>{text}</Title>
        </Infos>
      </CardLink>
    </Container>
  );
};

export default Card;
