import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2.4rem 0;
  padding: 2.4rem 2.2rem;
  border-radius: 0.5rem;
  background: var(--white-color);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem 0;
  color: var(--red-color);

  svg {
    font-size: 3rem;
    margin-bottom: 2.4rem;
  }

  .price {
    margin-bottom: 1.6rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--black-color);
  }
`;

export const Title = styled.h1`
  color: var(--black-color);
  font-size: 2.6rem;
`;

export const Description = styled.div`
  width: 100%;
  min-height: 11rem;

  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const Item = styled.div`
  display: flex;

  .item-icon {
    color: var(--red-color);
  }
  span {
    width: 80%;
    color: var(--black-color);
    margin-left: 0.8rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-color);
  background: var(--red-color);
  cursor: pointer;

  &:hover {
    background: var(--red-darker-color);
  }
`;
