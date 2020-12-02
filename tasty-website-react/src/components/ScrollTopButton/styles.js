import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 2.6rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  cursor: pointer;
  transition: all 2s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryAltColor};
  }
`;
