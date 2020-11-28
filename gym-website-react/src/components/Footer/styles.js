import styled from "styled-components";

export const Container = styled.div`
  background: var(--black-color);
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5.4rem 2rem;

  @media screen and (min-width: 760px) {
    padding: 5.4rem 3.6rem;

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoContent = styled.div`
  color: var(--white-color);
  margin-bottom: 2.4rem;

  h1 {
    font-size: 3.2rem;
    color: var(--red-color);
    margin-bottom: 1.2rem;
  }

  p {
    margin-bottom: 0.6rem;
  }

  @media screen and (min-width: 760px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 760px) {
    width: 50%;
  }
`;

export const LinkSection = styled.ul`
  list-style: none;
`;

export const LinkItem = styled.li`
  color: var(--white-color);
  margin-bottom: 1rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  a {
    text-decoration: none;
    color: var(--white-color);
    cursor: pointer;
  }
`;
