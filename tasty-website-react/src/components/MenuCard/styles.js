import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1024px) {
    margin: 0 2rem;
  }
`;

export const ImageContainer = styled.div`
  padding: 1.6rem 0;

  img {
    width: 100%;
    max-width: 15rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
`;

export const Plate = styled.div`
  padding: 0 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSizes.larger};
`;

export const Description = styled.div`
  height: 6.4rem;
  color: ${({ theme }) => theme.colors.titleColor};
  margin-bottom: 2rem;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CartButton = styled.div`
  padding-top: 3rem;

  button {
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0.8rem 0;
    padding: 1.4rem 1.6rem;

    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
