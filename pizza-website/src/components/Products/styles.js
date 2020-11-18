import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: var(--black-bg-color);
  color: var(--white-color);
`;

export const Heading = styled.h1`
  font-size: clamp(2rem, 2vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  margin: 0 2rem 3.5rem;
  line-height: 2;
`;

export const ProductImg = styled.img`
  min-width: 260px;
  max-width: 100%;
  height: 260px;
  box-shadow: 8px 8px var(--yellow-light-color);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  height: 90px;
  margin-bottom: 1rem;
`;

export const Price = styled.span`
  font-size: 2rem;
  margin-bottom: 2.2rem;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;

  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 700;
  color: var(--white-color);
  background: var(--red-base-color);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: var(--red-dark-color);
  }
`;
