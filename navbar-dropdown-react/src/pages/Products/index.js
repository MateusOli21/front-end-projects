import React from "react";

import productsBg from "../../assets/images/img-2.jpg";

import Hero from "../../components/Hero";
import Layout from "../../components/_layout";

const Products = () => {
  return (
    <Layout>
      <Hero imageBg={productsBg} title="Produtos" />
    </Layout>
  );
};

export default Products;
