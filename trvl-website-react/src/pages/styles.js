import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);

  display: flex;
  align-items: center;
  justify-content: center;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: clamp(20px, 4rem, 100px);
    color: var(--white-color);
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
  }

  img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: cover;
  }
`;
