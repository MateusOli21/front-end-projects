import styled from "styled-components";

export const Container = styled.div`
  padding: 4.6rem 2rem;
  background: var(--black-color);

  @media screen and (min-width: 760px) {
    padding: 6.4rem 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.4rem;
  text-align: center;

  color: var(--white-color);

  h1 {
    font-size: 3.6rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    width: 70%;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 760px) {
    padding: 0 2.4rem;
    justify-content: space-between;
  }
`;
