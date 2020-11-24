import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 8rem);
  background: var(--black-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 840px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: var(--white-color);

  @media screen and (min-width: 840px) {
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: clamp(1.4rem, 1.6rem, 2rem);
    margin: 0.5rem 0 1.2rem;
  }

  @media screen and (min-width: 840px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: clamp(1.6rem, 2rem, 3rem);
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;

  font-size: clamp(1.8rem, 2.2rem, 2.6rem);
  background: linear-gradient(
    to bottom,
    var(--orange-color) 0%,
    var(--red-color) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  strong {
    font-size: clamp(1.8rem, 2.2rem, 2.6rem);
    margin-left: 0.4rem;
    background: linear-gradient(
      to bottom,
      var(--purple-color) 0%,
      var(--cyan-color) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 840px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    font-size: clamp(4.2rem, 5.6rem, 6.4rem);

    strong {
      font-size: clamp(4.2rem, 5.6rem, 6.4rem);
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    max-width: 28rem;
  }

  @media screen and (min-width: 1024px) {
    img {
      max-width: 36rem;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 22rem;
  padding: 1.8rem 0.8rem;
  margin: 1.6rem 0 3.2rem;

  border: none;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-color);
  background: var(--orange-color);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: var(--orange-darker-color);
  }

  @media screen and (min-width: 840px) {
    max-width: 26rem;
    margin: 1.6rem 0;
  }
`;
