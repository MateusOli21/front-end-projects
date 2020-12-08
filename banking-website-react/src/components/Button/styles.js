import styled from "styled-components";

export const Container = styled.button`
  font-weight: 700;
  border: none;
  border-radius: 0.6rem;
  color: var(--white-color);
  cursor: pointer;

  padding: ${({ bigger }) => (bigger ? " 1.8rem 3.6rem" : " 1.2rem 2rem")};
  background: ${({ secondary }) =>
    secondary ? "var(--secondary-color)" : "var(--primary-color)"};

  &:hover {
    background: ${({ secondary }) =>
      secondary ? "var(--secondary-alt-color)" : "var(--primary-alt-color)"};
  }
`;
