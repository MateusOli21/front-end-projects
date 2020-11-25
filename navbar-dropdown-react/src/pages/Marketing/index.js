import React from "react";

import marketingBg from "../../assets/images/img-4.jpg";

import Hero from "../../components/Hero";
import Layout from "../../components/_layout";

const Marketing = () => {
  return (
    <Layout>
      <Hero imageBg={marketingBg} title="Marketing" />
    </Layout>
  );
};

export default Marketing;
