import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 7rem);
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    justify-content: center;
    padding: 0 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 4.4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 0;

  p {
    color: var(--primary-color);
    font-weight: var(--bold-weight);
    font-size: var(--normal-size);
  }

  h1 {
    font-size: var(--larger-size);
    margin: 2rem 0 2.4rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
  }
`;
