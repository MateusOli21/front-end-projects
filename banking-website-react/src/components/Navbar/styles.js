import styled from "styled-components";

export const Container = styled.header`
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: var(--white-color);

  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 760px) {
    padding: 0 4.6rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2.2rem;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 760px) {
    width: 100%;
    height: calc(100vh - 9rem);
    background: var(--white-color);

    position: absolute;
    top: 9rem;
    right: ${({ isVisible }) => (isVisible ? "0px" : "-999px")};
    transition: all 0.5s ease-in-out;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  margin: 2rem 0;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: var(--primary-color);
  }

  &.sign-in {
    @media screen and (min-width: 760px) {
      display: none;
    }
  }

  @media screen and (min-width: 760px) {
    margin: 0 1.6rem;
    font-size: 1.6rem;
  }
`;

export const SignIn = styled.div`
  display: none;
  margin-top: 2rem;

  @media screen and (min-width: 760px) {
    display: block;
    margin: 0;
  }
`;
