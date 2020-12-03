import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 9rem);
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.containerColor};

  @media screen and (min-width: 760px) {
    padding: 0 3.2em;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    width: 100%;
    max-width: 52rem;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.primaryColor};

  @media screen and (min-width: 760px) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: 0.6rem;

  @media screen and (min-width: 760px) {
    width: 85%;
    font-size: ${({ theme }) => theme.fontSizes.bigger};
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.4rem 0;

  @media screen and (min-width: 760px) {
    align-items: flex-start;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 32rem;

    @media screen and (min-width: 840px) {
      max-width: 36rem;
    }

    @media screen and (min-width: 1024px) {
      max-width: 38rem;
    }
  }
`;
