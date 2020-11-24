import React from "react";
import Hero from "../../components/Hero";

import { Layout } from "../../components/_layout";

import { Container } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Hero />
      </Container>
    </Layout>
  );
};

export default Home;
