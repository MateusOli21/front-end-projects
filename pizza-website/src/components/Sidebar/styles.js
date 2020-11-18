import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;

  display: grid;
  align-items: center;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  background: var(--yellow-light-color);

  transition: 0.4s ease-in-out;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--white-color);
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white-color);

  text-decoration: none;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--red-base-color);
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarLink = styled(Link)`
  background: var(--red-base-color);
  white-space: nowrap;
  padding: 16px 64px;
  color: var(--white-color);
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: var(--red-dark-color);
  }
`;
