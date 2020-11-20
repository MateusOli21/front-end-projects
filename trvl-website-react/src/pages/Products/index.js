import React, { useState } from "react";

import videoBg from "../../assets/videos/video-1.mp4";
import imageBg from "../../assets/images/img-5.jpg";

import { Container } from "../styles";

const Products = () => {
  const [video] = useState();

  return (
    <Container>
      {video ? (
        <video src={video} autoPlay loop muted />
      ) : (
        <img src={imageBg} alt="Travel" />
      )}
      <h1>Produtos</h1>
    </Container>
  );
};

export default Products;
