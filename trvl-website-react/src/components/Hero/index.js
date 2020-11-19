import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import video1 from "../../assets/videos/video-1.mp4";
import Button from "../Button";

import { Container, ButtonsContainer, Content, Video } from "./styles";

const Hero = () => {
  return (
    <Container>
      <Video src={video1} autoPlay loop muted />
      <Content>
        <h1>A aventura te espera</h1>
        <p>Está esperando o que?</p>
        <ButtonsContainer>
          <div>
            <Button btnStyle="secondary" btnSize="large">
              Comece agora
            </Button>
          </div>
          <Button btnSize="large">
            <span>Assista vídeo</span>
            <FaPlayCircle />
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default Hero;
