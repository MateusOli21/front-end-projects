import React from "react";

import homeBg from "../../assets/images/img-1.jpg";

import Layout from "../../components/_layout";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <Layout>
      <Hero imageBg={homeBg} title="Home page" />
    </Layout>
  );
};

export default Home;
