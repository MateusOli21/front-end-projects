import React from "react";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import DiscoverSection from "../../components/DiscoverSection";
import ServicesSection from "../../components/ServicesSection";
import AccountSection from "../../components/AccountSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DiscoverSection />
      <ServicesSection />
      <AccountSection />
    </>
  );
};

export default Home;
