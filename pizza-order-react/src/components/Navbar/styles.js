import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 760px) {
    padding: 0 4.2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  color: var(--primary-color);
  cursor: pointer;
`;

export const Nav = styled.nav``;

export const LogoTitle = styled(Link)`
  margin-left: 0.8rem;
  color: var(--primary-color);
  font-size: var(--normal-size);
  font-weight: var(--bold-weight);
`;

export const HomeLink = styled(Link)`
  color: var(--secondary-color);
  font-size: var(--normal-size);
  font-weight: var(--bold-weight);
  cursor: pointer;
`;
