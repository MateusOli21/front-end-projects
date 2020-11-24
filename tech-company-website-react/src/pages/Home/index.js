import React from "react";

import Hero from "../../components/Hero";
import Services from "../../components/Services";

import { Layout } from "../../components/_layout";

import { Container } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Hero />
        <Services />
      </Container>
    </Layout>
  );
};

export default Home;
