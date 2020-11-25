import React from "react";

import designBg from "../../assets/images/img-1.jpg";

import Layout from "../../components/_layout";
import Hero from "../../components/Hero";

const Design = () => {
  return (
    <Layout>
      <Hero imageBg={designBg} title="Design" />
    </Layout>
  );
};

export default Design;
