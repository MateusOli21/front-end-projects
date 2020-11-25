import React from "react";

import servicesBg from "../../assets/images/img-3.jpg";

import Hero from "../../components/Hero";
import Layout from "../../components/_layout";

const Services = () => {
  return (
    <Layout>
      <Hero imageBg={servicesBg} title="Serviços" />
    </Layout>
  );
};

export default Services;
