import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.8rem;
  background: var(--black-color);
`;

export const Logo = styled.h1`
  color: var(--white-color);
  font-size: 2.2rem;
  cursor: pointer;
`;

export const MobileIcons = styled.div`
  color: var(--white-color);
  cursor: pointer;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;

  @media screen and (max-width: 760px) {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 9rem;
    right: ${({ isClicked }) => (isClicked ? "0px" : "-999px")};

    flex-direction: column;
    background: var(--black-color);
    transition: all 0.5s ease-in-out;
  }
`;

export const Item = styled.li`
  margin: 1.6rem 0;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 760px) {
    margin: 0 1.6rem;
  }
`;

export const PageLink = styled.span`
  color: var(--white-color);
  font-weight: 700;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    color: var(--red-color);
  }
`;
