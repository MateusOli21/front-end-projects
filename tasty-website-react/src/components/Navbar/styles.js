import styled from "styled-components";

export const Container = styled.div`
  height: 9rem;
  z-index: 100;
  position: sticky;
  top: 0;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.2rem;
  background: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 4px rgba(0,0,0,.1)" : "none"};

  @media screen and (min-width: 760px) {
    padding: 0 3.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 4.4rem;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.grayColor};
  font-size: ${({ theme }) => theme.fontSizes.large};

  @media screen and (min-width: 760px) {
    font-size: ${({ theme }) => theme.fontSizes.bigger};
  }
`;

export const MobileMenu = styled.div`
  color: ${({ theme }) => theme.colors.grayColor};

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  z-index: 10;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: calc(100vh - 9rem);
    position: absolute;
    top: 9rem;
    right: ${({ isActive }) => (isActive ? "0px" : "-999px")};
    transition: all 0.5s ease-in-out;
  }
`;

export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  padding: 1.6rem 0;
  color: ${({ theme }) => theme.colors.grayColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media screen and (min-width: 760px) {
    padding: 0 1.6rem;
  }
`;
