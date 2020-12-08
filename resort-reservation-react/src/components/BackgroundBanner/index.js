import React from "react";

import { Container } from "./styles";

function BackgroundBanner({ children, banner, img }) {
  return (
    <Container banner={banner} img={img}>
      {children}
    </Container>
  );
}

export default BackgroundBanner;
