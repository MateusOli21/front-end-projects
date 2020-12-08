import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--white-color);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    padding: 0 4.2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 52rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  @media screen and (min-width: 760px) {
    align-items: flex-start;
    padding: 0 5rem 0 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 1.4rem;

  @media screen and (min-width: 760px) {
    font-size: 4.8rem;
  }
`;

export const Sub = styled.p`
  margin-bottom: 2.6rem;

  @media screen and (min-width: 760px) {
    font-size: 2.4rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  max-width: 26rem;

  img {
    width: 100%;
  }

  @media screen and (min-width: 760px) {
    max-width: 36rem;
  }

  @media screen and (min-width: 900px) {
    max-width: 44rem;
  }
`;
