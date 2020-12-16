import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 0.4rem;
  padding: ${({ larger }) => (larger ? "1.8rem 2.6rem" : "1.4rem 2.2rem")};
  background: var(--primary-color);
  color: var(--white-color);
  font-weight: var(--bold-weight);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--primary-alt-color);
  }
`;
