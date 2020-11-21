import styled from "styled-components"

export const Container = styled.div`
  border-radius: 4px;
  outline: none;
  color: var(--white-color);
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-out;

  padding: ${({ btnSize }) => (btnSize === "big" ? "16px 64px" : "10px 20px")};
  font-size: ${({ btnFont }) => (btnFont === "big" ? "20px" : "16px")};

  border: ${({ btnStyle }) =>
    btnStyle === "primary" ? "none" : "2px solid var(--red-color)"};
  background: ${({ btnStyle }) =>
    btnStyle === "primary" ? "var(--red-color)" : "transparent"};

  &:hover {
    background: ${({ btnStyle }) =>
      btnStyle === "primary" ? "var(--red-darker-color)" : "var(--red-color)"};
  }
`
