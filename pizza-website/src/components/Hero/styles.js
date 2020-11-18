import styled from "styled-components";
import heroImgBg from "../../images/pizza-3.jpg";

export const Container = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${heroImgBg});
`;

export const HeroContent = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  width: 650px;
  height: 100vh;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;

  color: var(--white-color);
  text-transform: uppercase;
  line-height: 1;
  font-weight: 700;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  box-shadow: 0 5px var(--yellow-base-color);
  letter-spacing: 3px;
  padding-bottom: 8px;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;
  background: var(--red-base-color);
  color: var(--white-color);
  font-weight: 700;

  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    /* color: var(--black-color); */
    background: var(--red-dark-color);
  }
`;
