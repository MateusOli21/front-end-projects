import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--white-color);
  font-size: 2rem;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  padding-right: 2rem;
  cursor: pointer;
  color: var(--white-color);

  p {
    margin-right: 10px;
    font-weight: 700;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
`;
