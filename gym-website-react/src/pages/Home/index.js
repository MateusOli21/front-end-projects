import React from "react";

import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import heroBg from "../../assets/images/gym-1.jpg";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero heroBg={heroBg} />
    </Container>
  );
};

export default Home;
