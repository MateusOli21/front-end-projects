import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 7rem);
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img-container {
    width: 100%;
    max-width: 36rem;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;

    .img-container {
      max-width: 38rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .img-container {
      max-width: 42rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.4rem;

  h1 {
    font-size: var(--bigger-size);
  }

  p {
    font-size: var(--normal-size);
    text-align: center;
    margin: 1.6rem 0;
  }

  @media screen and (min-width: 760px) {
    max-width: 30rem;
    align-items: flex-start;

    p {
      text-align: start;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: var(--h1-size);
    }

    p {
      font-size: var(--larger-size);
      margin: 1rem 0 2.2rem;
    }

    max-width: 42rem;
  }
`;
