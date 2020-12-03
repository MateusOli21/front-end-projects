import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.containerColor};

  @media screen and (min-width: 768px) {
    padding: 5.2rem 3.2rem;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 1.2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
  padding-bottom: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

export const MenuContainer = styled.div`
  margin: 3.6rem 0 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 860px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
