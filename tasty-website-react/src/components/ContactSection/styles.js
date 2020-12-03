import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.containerColor};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    padding: 5.2rem 3.2rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    align-items: flex-start;
    margin-right: 2rem;
  }
  @media screen and (min-width: 840px) {
    max-width: 56rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 62rem;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 1.2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  color: ${({ theme }) => theme.colors.titleColor};
  padding-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
  padding-bottom: 3.6rem;

  @media screen and (min-width: 760px) {
    text-align: start;
  }
`;
