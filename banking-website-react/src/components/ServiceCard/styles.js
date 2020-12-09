import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 26rem;
  padding: 3.2rem 2rem;
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white-color);
  border-radius: 0.8rem;

  @media screen and (min-width: 760px) {
    margin: 0 2rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 32rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 3.2rem;
`;

export const Description = styled.p`
  text-align: center;
  margin: 1rem 0;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 14rem;

  @media screen and (min-width: 760px) {
    max-width: 16rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 20rem;
  }
`;
