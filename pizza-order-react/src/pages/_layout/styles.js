import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 8rem);
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ bgImage }) =>
    bgImage
      ? `linear-gradient(to right,rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`
      : "var(--black-color)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 760px) {
    padding: 0 3.2rem;
  }
`;
