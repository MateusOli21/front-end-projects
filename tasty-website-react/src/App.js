import { useState } from "react";

import GlobalStyles from "./assets/styles/GlobalStyles";
import Theme from "./assets/styles/Theme";
import dark from "./assets/styles/themes/dark";
import light from "./assets/styles/themes/light";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ScrollTopButton from "./components/ScrollTopButton";
import ServicesSection from "./components/ServicesSection";
import MenuSection from "./components/MenuSection";

function App() {
  const [currentTheme, setCurrentTheme] = useState(light);

  const toggleCurrentTheme = () =>
    setCurrentTheme(currentTheme.title === "light" ? dark : light);

  return (
    <>
      <Theme currentTheme={currentTheme}>
        <GlobalStyles />
        <Navbar toggleCurrentTheme={toggleCurrentTheme} />
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <ScrollTopButton />
      </Theme>
    </>
  );
}

export default App;
