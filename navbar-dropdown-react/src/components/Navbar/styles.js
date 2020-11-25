import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--black-color);
  padding: 0 42px;
`;

export const Logo = styled.div`
  h1 {
    color: var(--white-color);
    text-transform: uppercase;
  }
`;

export const MobileIcons = styled.div`
  color: var(--white-color);
  cursor: pointer;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  list-style: none;

  @media screen and (max-width: 760px) {
    z-index: 5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 90px;
    right: ${({ isClicked }) => (isClicked ? "0px" : "-999px")};

    flex-direction: column;
    background: var(--black-color);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (min-width: 760px) {
    display: flex;
  }
`;

export const Item = styled.li`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid var(--black-color);

  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid var(--white-color);
  }

  @media screen and (min-width: 760px) {
    height: 90px;
    margin: 0 18px;
  }
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: var(--white-color);
`;
