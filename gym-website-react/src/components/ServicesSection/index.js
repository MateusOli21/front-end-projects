import React from "react";
import { HiCheckCircle } from "react-icons/hi";

import gymImage from "../../assets/images/gym-2.jpg";

import { Container, Features, Title, Items, Item, Image } from "./styles";

const ServicesSection = () => {
  return (
    <Container>
      <Features>
        <Title>O que oferecemos</Title>

        <Items>
          <Item>
            <HiCheckCircle />
            <span>Aulas em grupo</span>
          </Item>

          <Item>
            <HiCheckCircle />
            <span>Personal Trainer</span>
          </Item>
          <Item>
            <HiCheckCircle />
            <span>Vestiário e sauna</span>
          </Item>
          <Item>
            <HiCheckCircle />
            <span>Piscina</span>
          </Item>
          <Item>
            <HiCheckCircle />
            <span>Aberto 24h</span>
          </Item>
        </Items>
      </Features>

      <Image src={gymImage} alt="gym room" />
    </Container>
  );
};

export default ServicesSection;
