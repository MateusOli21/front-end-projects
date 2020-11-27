import React from "react";
import Card from "../Card";
import plansData from "./data";

import { Cards, Container, Title } from "./styles";

const PlansSection = () => {
  return (
    <Container>
      <Title>
        <h1>Planos</h1>
        <p>Comece hoje e tenha desconto de 20% na sua matricula</p>
      </Title>

      <Cards>
        {plansData.map((plan) => (
          <Card key={plan.name} plan={plan} />
        ))}
      </Cards>
    </Container>
  );
};

export default PlansSection;
