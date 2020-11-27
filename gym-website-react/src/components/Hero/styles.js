import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 9rem);
  background: ${({ bgImage }) =>
    bgImage
      ? `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${bgImage})`
      : "var(--black-color)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  height: calc(100vh - 9rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1,
  p {
    color: var(--white-color);
  }

  h1 {
    font-size: 4.4rem;
  }

  p {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 760px) {
    align-items: flex-start;
    padding-left: 12rem;

    h1 {
      font-size: 5.8rem;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 2.4rem;
    }
  }

  @media screen and (min-width: 1280px) {
    h1 {
      font-size: 6.4rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const Button = styled.button`
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  border: 0;

  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-color);
  background: var(--red-color);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--red-darker-color);
  }

  @media screen and (min-width: 760px) {
    font-size: 2.2rem;
  }
`;
