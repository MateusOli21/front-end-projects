import styled from "styled-components";

export const Container = styled.header`
  height: 7rem;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: var(--white-color);

  @media screen and (min-width: 760px) {
    padding: 0 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 4.2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  cursor: pointer;

  h1 {
    color: var(--primary-color);
    text-transform: uppercase;
  }

  h2 {
    color: var(--black-color);
  }
`;

export const Nav = styled.nav`
  z-index: 10;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: calc(100vh - 7rem);
    position: absolute;
    top: 7rem;
    right: ${({ isActive }) => (isActive ? "0px" : "-999px")};
    background: var(--white-color);
    transition: all 0.5s ease-in-out;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.4rem;

    @media screen and (min-width: 760px) {
      margin: 0;
      flex-direction: row;
    }

    li {
      margin: 1.8rem 0;
      font-size: var(--normal-size);
      color: var(--black-color);
      cursor: pointer;

      &:hover {
        color: var(--primary-color);
      }

      @media screen and (min-width: 760px) {
        flex-direction: row;
        margin: 0 1.8rem;
      }
    }
  }
`;

export const NavMobile = styled.div`
  color: var(--black-color);

  @media screen and (min-width: 760px) {
    display: none;
  }
`;
