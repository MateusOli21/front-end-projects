import styled from "styled-components";

export const Container = styled.button`
  max-width: 26rem;
  padding: ${({ theme }) => theme.paddings.normal};
  border: none;
  border-radius: 0.4rem;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryAltColor};
  }

  @media screen and (min-width: 760px) {
    padding: ${({ theme }) => theme.paddings.bigger};
  }
`;
