import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 1rem;
  margin: 1rem;
`;

export const IconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  img {
    width: 38%;
    height: 8rem;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.larger};
  color: ${({ theme }) => theme.colors.titleColor};
  margin-bottom: 1.2rem;
`;

export const Description = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.titleColor};

  p {
    text-align: center;
    width: 80%;
  }
`;
