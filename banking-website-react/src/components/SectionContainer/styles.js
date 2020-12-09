import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ altBg }) =>
    altBg ? "var(--black-color)" : "var(--white-color)"};

  @media screen and (min-width: 760px) {
    height: 100vh;
  }
`;
