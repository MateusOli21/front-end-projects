import styled from "styled-components";
import bgImg from "../../assets/images/img-home.jpg";

export const Container = styled.div`
  height: calc(100vh - 80px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  /* background: url(${bgImg}) center center/cover no-repeat; */
`;

export const Content = styled.div`
  padding: 0 16px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--white-color);
    text-align: center;
    font-size: clamp(20px, 4rem, 100px);
    margin-top: -100px;
  }

  p {
    margin: 16px 0;
    color: var(--white-color);
    font-size: 32px;
  }

  @media screen and (max-width: 760px) {
    p {
      font-size: 24px;
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  div {
    margin-right: 10px;
  }

  span {
    margin-right: 5px;
  }

  @media screen and (max-width: 760px) {
    display: block;

    div {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
