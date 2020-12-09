import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ altBg }) =>
    altBg ? "var(--black-color)" : "var(--white-color)"};
`;
