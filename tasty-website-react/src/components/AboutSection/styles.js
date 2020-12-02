import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem 2rem;
  background: ${({ theme }) => theme.colors.containerColor};

  @media screen and (min-width: 760px) {
    border: 1px solid red;
    padding: 8rem 3.2em;

    flex-direction: row;
    justify-content: center;
  }
`;

export const Content = styled.div`
  margin: 3.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 760px) {
    width: 40%;
    align-items: flex-start;
    text-align: start;
    justify-content: center;

    margin-left: 2.2.rem;
  }
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 1.2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  color: ${({ theme }) => theme.colors.titleColor};

  @media screen and (min-width: 760px) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 1rem 0 2.2rem;

  @media screen and (min-width: 760px) {
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 36rem;

  img {
    width: 100%;
    border-radius: 0.6rem;
  }

  @media screen and (min-width: 768px) {
    order: -1;
    margin-right: 2.6rem;
    max-width: 40rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 44rem;
  }
`;
