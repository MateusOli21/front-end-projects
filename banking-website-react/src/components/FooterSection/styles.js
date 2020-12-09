import styled from "styled-components";

export const Container = styled.div`
  background: var(--black-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4.2rem 2rem;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (min-width: 760px) {
    justify-content: center;
  }
`;

export const LinksBlock = styled.ul`
  width: 100%;
  max-width: 14rem;
  margin: 1rem 0;

  @media screen and (min-width: 760px) {
    margin: 0 2rem;
  }

  @media screen and (min-width: 840px) {
    margin: 0 2.4rem;
  }
`;

export const LinkItem = styled.li`
  color: var(--white-color);
  margin: 1.6rem 0;
  cursor: pointer;
`;

export const LinkTitle = styled.h3`
  font-size: 1.8rem;
  cursor: text;
`;

export const MediasContainer = styled.div`
  width: 100%;
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 70rem;
    margin-top: 3.2rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2.2rem;
  color: var(--white-color);
  cursor: pointer;
`;

export const Rights = styled.p`
  color: var(--white-color);
  margin: 1.6rem 0;

  @media screen and (min-width: 760px) {
    margin: 0;
  }
`;

export const MediasWrapper = styled.div`
  width: 100%;
  max-width: 22rem;
  margin-top: 1.4rem;
  display: flex;
  justify-content: space-between;

  .media-icon {
    color: var(--white-color);
    cursor: pointer;
  }

  @media screen and (min-width: 760px) {
    margin: 0;
  }
`;
