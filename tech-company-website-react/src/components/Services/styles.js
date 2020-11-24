import styled from "styled-components";

export const Container = styled.div`
  background: var(--black-color);
  padding: 2rem 0 3.6rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3.6rem;
  color: var(--white-color);
`;

export const CardsContainer = styled.div`
  margin: 6.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 840px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 280px;
  position: relative;
  margin: 2rem 0;
  object-fit: cover;
  transition: all 0.3s ease-out;

  img {
    border-radius: 0.4rem;
    width: 100%;
  }

  &:hover {
    transform: scale(1.075);
  }

  @media screen and (min-width: 840px) {
    margin: 0 2rem;
    max-width: 380px;

    img {
      max-height: 440px;
    }
  }
`;

export const CardContent = styled.div`
  color: var(--white-color);
  position: absolute;
  left: 1.6rem;
  bottom: 2rem;

  width: calc(100% - 2.6rem);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    margin: 0.6rem 0 1.6rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 1.2rem 0.8rem;
  border: none;
  border-radius: 0.4rem;
  font-weight: 700;
  color: var(--white-color);
  background: var(--orange-color);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: var(--orange-darker-color);
  }
`;
