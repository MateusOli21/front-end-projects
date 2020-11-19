import styled from "styled-components";

export const Container = styled.button`
  padding: ${({ btnSize }) => (btnSize === "large" ? "12px 26px" : "6px 18px")};
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  background: ${({ btnStyle }) =>
    btnStyle === "secondary" ? "transparent" : "var(--white-color)"};
  color: ${({ btnStyle }) =>
    btnStyle === "secondary" ? "var(--white-color)" : "var(--black-color)"};

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--white-color);
    color: var(--black-color);
  }
`;
