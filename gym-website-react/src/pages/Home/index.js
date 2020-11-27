import React from "react";

import heroBg from "../../assets/images/gym-1.jpg";

import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";
import PlansSection from "../../components/PlansSection";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero heroBg={heroBg} />
      <ServicesSection />
      <PlansSection />
    </Container>
  );
};

export default Home;
