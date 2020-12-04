import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  padding: 1.4rem 1.8rem;
  border: none;
  border-radius: 0.6rem;

  font-size: var(--normal-size);
  font-weight: 700;
  color: var(--white-color);
  background: var(--primary-color);

  &:hover {
    background: var(--primary-color);
  }
`;
