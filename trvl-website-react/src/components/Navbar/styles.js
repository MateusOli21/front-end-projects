import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 80px;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  padding: 0 48px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainIcon = styled(Link)`
  color: var(--white-color);
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    margin-right: 12px;
    font-weight: 700;
  }
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    padding: 0 20px;
  }

  @media screen and (max-width: 960px) {
    ul {
      z-index: 1;
      width: 100%;
      height: 90vh;

      position: fixed;
      top: 80px;
      right: ${({ isOpen }) => (isOpen ? "0px" : "-999px")};
      flex-direction: column;
      align-items: center;

      background: var(--black-color);
      transition: all 0.4s ease-in-out;
    }
  }
`;

export const MenuIcon = styled.div`
  color: var(--white-color);
`;

export const NavItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  transition: all 0.3s ease-out;

  &:hover {
    border-bottom: 3px solid white;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--white-color);
  padding: 0 16px;
`;
