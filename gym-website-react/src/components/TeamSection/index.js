import React from "react";

import image1 from "../../assets/images/img-1.jpg";
import image2 from "../../assets/images/img-2.jpg";
import image4 from "../../assets/images/img-4.jpg";
import image6 from "../../assets/images/img-6.jpg";
import image7 from "../../assets/images/img-7.jpg";

import { Container, Content, Item, TrialContent } from "./styles";

const TeamSection = () => {
  return (
    <Container>
      <h1>Faça parte do team Frontier</h1>

      <Content>
        <Item>
          <img src={image1} alt="fitness" />
        </Item>
        <Item>
          <img src={image4} alt="fitness" />
        </Item>
        <Item>
          <img src={image6} alt="fitness" />
        </Item>

        <Item>
          <img src={image7} alt="fitness" />
        </Item>
        <Item>
          <img src={image2} alt="fitness" />
        </Item>
        <Item>
          <TrialContent>
            <h1>Faça as aulas gratuitas</h1>
            <p>
              Nós disponibilizamos algumas aulas gratuitas, onde você pode
              treinar ou praticar uma de nossas aulas em grupo e se interar com
              o ambiente.
            </p>
          </TrialContent>
        </Item>
      </Content>
    </Container>
  );
};

export default TeamSection;
