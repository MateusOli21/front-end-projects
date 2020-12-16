import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2.2rem;
  margin: 2rem 0;
  cursor: pointer;

  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 760px) {
    max-width: 22rem;
    margin: 0;
  }

  @media screen and (min-width: 860px) {
    max-width: 24rem;
  }

  @media screen and (min-width: 930px) {
    max-width: 28rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 30rem;
  }

  @media screen and (min-width: 1280px) {
    max-width: 36rem;
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: 18rem;

  img {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 22rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.4rem 0;

  h1 {
    font-size: var(--larger-size);
  }

  p {
    text-align: center;
    margin: 1.2rem 0 1.6rem;
    font-size: var(--normal-size);
  }

  @media screen and (min-width: 760px) {
    p {
      height: 7rem;
    }
  }
`;
