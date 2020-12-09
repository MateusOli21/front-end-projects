import styled from "styled-components";

export const Text = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
  text-align: center;
  color: ${({ alt }) =>
    alt ? "var(--white-color)" : "var(--secondary-color)"};

  @media screen and (min-width: 760px) {
    font-size: 4.6rem;
    text-align: start;
  }
`;
