import React from "react";

import heroBg from "../../assets/images/gym-1.jpg";
import newsLetterBg from "../../assets/images/gym-2.jpg";

import Layout from "../_layout";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import PlansSection from "../../components/PlansSection";
import TeamSection from "../../components/TeamSection";
import NewsLetterSection from "../../components/NewsLetterSection";

const Home = () => {
  return (
    <Layout>
      <Hero heroBg={heroBg} />
      <ServicesSection />
      <PlansSection />
      <TeamSection />
      <NewsLetterSection bgImage={newsLetterBg} />
    </Layout>
  );
};

export default Home;
