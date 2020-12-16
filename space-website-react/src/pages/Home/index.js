import React from "react";

import Layout from "../Layout";
import Hero from "../../components/Hero";
import ExploreSection from "../../components/ExploreSection";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ExploreSection />
    </Layout>
  );
};

export default Home;
