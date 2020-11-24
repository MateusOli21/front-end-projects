import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: var(--black-color);
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.6rem;
  position: sticky;
  top: 0;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: var(--white-color);

  span {
    margin-right: 1.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const NavbarToggle = styled.div`
  color: var(--white-color);

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media screen and (max-width: 760px) {
    z-index: 5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 8rem;
    right: ${({ isClicked }) => (isClicked ? "0px" : "-999px")};

    flex-direction: column;
    background: var(--black-color);
    transition: all 0.5s ease-in-out;
  }
`;

export const Item = styled.li`
  margin: 1.8rem 0;

  @media screen and (min-width: 760px) {
    margin: 0 1.6rem;
  }
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  color: var(--white-color);
  font-weight: 700;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--orange-color);
  }
`;

export const SignButton = styled.button`
  padding: 0.8rem 1.4rem;
  border: 1px solid var(--salmon-color);
  margin-left: 1rem;
  border-radius: 0.4rem;
  font-weight: 700;
  color: var(--white-color);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--salmon-color);
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    max-width: 240px;
    margin: 1.8rem 0;

    background: var(--salmon-color);
  }
`;
