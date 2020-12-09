import styled from "styled-components";

export const Text = styled.p`
  color: var(--black-color);
  margin-bottom: 2.6rem;
  text-align: center;
  font-size: 1.6rem;

  @media screen and (min-width: 760px) {
    font-size: 2rem;
    text-align: start;
  }
`;
