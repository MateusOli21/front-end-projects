import React, { useState } from "react";

import videoBg from "../../assets/videos/video-2.mp4";
import imageBg from "../../assets/images/img-2.jpg";

import { Container } from "../styles";

const Services = () => {
  const [video] = useState(videoBg);

  return (
    <Container>
      {video ? (
        <video src={video} autoPlay loop muted />
      ) : (
        <img src={imageBg} alt="Travel" />
      )}
      <h1>Serviços</h1>
    </Container>
  );
};

export default Services;
