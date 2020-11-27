import React from "react";

import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";

import heroBg from "../../assets/images/gym-1.jpg";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero heroBg={heroBg} />
      <ServicesSection />
    </Container>
  );
};

export default Home;
