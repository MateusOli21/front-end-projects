import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 120px;
  background: var(--orange-color);
  padding: 10px 16px;
  border-radius: 4px;
  transition: all 0.3s ease-out;

  position: absolute;
  top: 70px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageLink = styled(Link)`
  margin: 16px 0;
  text-decoration: none;
  color: var(--white-color);
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: var(--gray-color);
  }
`;
