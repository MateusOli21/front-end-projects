import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.6rem 2rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 6.4rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: var(--black-color);
  margin-bottom: 2.6rem;
`;

export const Features = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;

  @media screen and (min-width: 760px) {
    max-width: 320px;
    margin-bottom: 0;
  }
`;

export const Items = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin: 1rem 0;
  color: var(--red-color);

  span {
    margin-left: 1rem;
    color: var(--black-color);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 44rem;
  border-radius: 0.8rem;
`;
