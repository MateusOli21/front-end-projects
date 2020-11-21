import styled from "styled-components"
import { Link } from "gatsby"
import { DiScala } from "react-icons/di"

export const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: 0.8s all ease-in-out;

  background: ${({ isScrolled }) =>
    isScrolled
      ? "var(--white-color)"
      : "linear-gradient(to bottom,  rgba(255,255,255, 0.7) 0%,rgba(255,255,255,0) 100%)"};

  @media screen and (max-width: 960px) {
    background: ${({ isScrolled }) =>
      isScrolled ? "var(--white-color)" : "transparent"};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  align-items: center;
  z-index: 1;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--black-color);
  font-size: 1.5rem;
  cursor: pointer;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 16px;
  }
`

export const Icon = styled(DiScala)`
  margin-right: 6px;
`

export const MobileIcon = styled.div`
  margin-right: 16px;

  @media screen and (min-width: 760px) {
    display: none;
  }
`

export const NavMenu = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;

  position: absolute;
  top: ${({ isClicked }) => (isClicked ? "100%" : "-1000px")};

  background: ${({ isClicked }) =>
    isClicked ? "var(--white-color)" : "transparent"};
  opacity: 1;
  transition: all 0.3s ease;

  @media screen and (min-width: 760px) {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: unset;
  }
`

export const NavItem = styled.div`
  width: 100%;
`

export const NavLink = styled(Link)`
  width: 100%;
  display: table;
  text-align: center;
  text-decoration: none;
  padding: 10px 0;
  color: var(--black-color);

  @media screen and (min-width: 760px) {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
`
