import styled from "styled-components";

export const Container = styled.div`
  background: ${({ bgImage }) =>
    bgImage
      ? `linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.4)) 100%, url(${bgImage})`
      : "var(--black-color)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5.2rem 2rem;

  h1 {
    color: var(--white-color);
    font-size: 3.2rem;
    margin-bottom: 2.6rem;
  }

  @media screen and (min-width: 760px) {
    padding: 6rem 2rem;

    h1 {
      text-align: center;
      margin-bottom: 4.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      width: 50%;
    }
  }
`;

export const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 760px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Input = styled.input`
  padding: 1rem 1.2rem;
  width: 100%;
  margin-bottom: 1.6rem;
  margin-right: 0.8rem;

  border: 0;
  border-radius: 0.5rem;

  @media screen and (min-width: 760px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  padding: 1.2rem 1.4rem;
  border: 0;
  border-radius: 0.5rem;
  font-weight: 700;
  color: var(--white-color);
  background: var(--red-color);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--red-darker-color);
  }
`;
