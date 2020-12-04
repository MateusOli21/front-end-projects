import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: calc(100vh - 8rem);
  padding: 0 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ bgImage }) =>
    bgImage
      ? `linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`
      : "var(--black-color)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: var(--bigger-size);
  text-align: center;
  color: var(--white-color);
  margin-bottom: 1.6rem;
`;

export const Button = styled(Link)`
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
