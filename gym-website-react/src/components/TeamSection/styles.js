import styled from "styled-components";

export const Container = styled.div`
  margin: 11rem 0;
  padding: 0 2rem;

  h1 {
    font-size: 3.6rem;
    text-align: center;
    margin-bottom: 6rem;
  }

  @media screen and (min-width: 760px) {
    padding: 0 16rem;

    h1 {
      font-size: 4.8rem;
    }
  }
`;

export const Content = styled.div`
  column-count: 1;
  gap: 1.6rem;

  @media screen and (min-width: 760px) {
    column-count: 2;
  }
`;

export const Item = styled.figure`
  margin: 0;
  display: flex;
  margin-bottom: 1.6rem;
  break-inside: avoid;

  img {
    width: 100%;
    border-radius: 0.8rem;
  }
`;

export const TrialContent = styled.div`
  padding: 2.4rem 2rem;

  display: flex;
  flex-direction: column;

  h1 {
    text-align: start;
    font-size: 3.2rem;
    margin-bottom: 1.6rem;
  }

  p {
    width: 85%;
    font-size: 1.8rem;
  }
`;
