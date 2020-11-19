import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  outline: none;
  font-size: 18px;
  padding: ${({ btnSize }) => (btnSize === "large" ? "12px 26px" : "6px 18px")};

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

  @media screen and (max-width: 760px) {
    width: 100%;
    font-size: 16px;
  }
`;
