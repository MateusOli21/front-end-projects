import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.containerColor};

  @media screen and (min-width: 760px) {
    padding: 5.2rem 3.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  margin: 2rem 0;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.bigger};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  p {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (min-width: 760px) {
    margin: 0 2.4rem;
  }
`;

export const SocialMidias = styled.div`
  width: 100%;
  max-width: 8.6rem;
  display: flex;
  justify-content: space-between;
  margin: 1.2rem 0;

  color: ${({ theme }) => theme.colors.titleColor};
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.8rem 0;

  p {
    color: ${({ theme }) => theme.colors.titleColor};
    margin: 0.6rem 0;
  }

  @media screen and (min-width: 760px) {
    margin: 0 2.8rem;
  }
`;

export const LinkTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  color: ${({ theme }) => theme.colors.titleColor};
  margin-bottom: 1rem;
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 0.6rem 0;
  cursor: pointer;
`;
