import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export const Navbar = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  background: var(--offWhite);

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 4rem;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled(FaAlignRight)`
  width: 24px;
  height: 24px;

  fill: var(--primaryColor);
`;

export const NavOptions = styled.ul`
  display: block;
  overflow: hidden;
  list-style-type: none;
  height: ${({ isOpen }) => (isOpen ? "60px" : 0)};
  transition: var(--mainTransition);

  @media screen and (min-width: 768px) {
    display: flex;
    overflow: visible;
    align-items: center;
  }
`;

export const NavOption = styled.li`
  margin-left: 1.5rem;
  text-align: right;
  padding: 0.5em 0;
`;

export const NavLink = styled(Link)`
  font-weight: 700;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--primaryColor);
  }
`;
