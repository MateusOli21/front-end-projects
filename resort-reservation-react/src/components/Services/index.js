import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import SectionTitle from "../SectionTitle";

import {
  Container,
  ServicesContent,
  Service,
  Icon,
  Title,
  Description,
} from "./styles";

function Services() {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "Coquetel grátis",
      description:
        "Lorem ipsum dolor sit amet, conser. Nula turpis magna, eleifend eu nulla vitae, gravid.",
    },
    {
      icon: <FaHiking />,
      title: "Diversas excursões",
      description:
        "Morbi quis maximus risus. Morbi enim enim, consectetur id quam et, commodo convalli.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Transporte gratuito",
      description:
        "Nunc convallis vitae neque eget ultrices. Nunc ut dui non orci blandit varius.",
    },
    {
      icon: <FaBeer />,
      title: "Diversos tipos de bebidas",
      description:
        "Ut et faucibus orci. Integer vulputate quam vitae maximus placerat. Sed lobortis.",
    },
  ]);

  return (
    <Container>
      <SectionTitle title="Serviços" />
      <ServicesContent>
        {services.map((service, index) => (
          <Service key={index}>
            <Icon>{service.icon}</Icon>
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
          </Service>
        ))}
      </ServicesContent>
    </Container>
  );
}

export default Services;
