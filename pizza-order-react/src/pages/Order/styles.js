import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 48rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: var(--larger-size);
  color: var(--white-color);
  padding-bottom: 1rem;
  text-align: center;

  @media screen and (min-width: 760px) {
    font-size: var(--bigger-size);
  }
`;

export const Description = styled.p`
  font-size: var(--normal-size);
  color: var(--white-color);
  text-align: center;

  @media screen and (min-width: 760px) {
    font-size: var(--larger-size);
  }
`;

export const ToppingsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const Topping = styled.li`
  font-size: var(--normal-size);
  color: var(--white-color);
  text-transform: capitalize;

  @media screen and (min-width: 760px) {
    font-size: var(--larger-size);
  }
`;
