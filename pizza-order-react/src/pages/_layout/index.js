import React from "react";
import Navbar from "../../components/Navbar";

import pizzaBg from "../../assets/images/pizza-2.jpg";

import { Container } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container bgImage={pizzaBg}>{children}</Container>
    </>
  );
};

export default Layout;
