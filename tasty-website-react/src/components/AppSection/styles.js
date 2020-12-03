import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.containerColor};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 5.2rem 3.2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  @media screen and (min-width: 760px) {
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    max-width: 44rem;
  }

  @media screen and (min-width: 760px) {
    order: -1;
  }
`;

export const StoresContainer = styled.div`
  width: 100%;
  padding: 2.4rem 0;

  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 12rem;
    cursor: pointer;
  }

  .play-store-img {
    margin: 0 1rem;
  }

  @media screen and (min-width: 760px) {
    justify-content: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 1.2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
  padding-bottom: 1.2rem;

  @media screen and (min-width: 760px) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;

  @media screen and (min-width: 760px) {
    text-align: start;
  }
`;
