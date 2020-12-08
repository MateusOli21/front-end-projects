import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.75rem;
  background: var(--opacityBlack);
  border-radius: 5px;
  color: var(--mainWhite);
  margin: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  letter-spacing: var(--mainSpacing);

  @media screen and (min-width: 576px) {
    width: 100%;
    font-size: 2.75rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const GoldDiv = styled.div`
  width: 100%;
  max-width: 280px;
  height: 4px;
  margin: 1.5rem auto;
  background: var(--primaryColor);
`;
