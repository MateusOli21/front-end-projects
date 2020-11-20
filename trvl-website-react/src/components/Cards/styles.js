import styled from "styled-components";

export const Container = styled.div`
  background: var(--white-color);

  h1 {
    text-align: center;
    color: var(--dark-blue-color);
    padding-top: 64px;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

export const Items = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
