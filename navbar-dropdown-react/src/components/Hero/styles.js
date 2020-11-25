import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 90px);
  background: ${({ imageBg }) => imageBg && `url(${imageBg})`};
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 36px;
    color: var(--white-color);
  }

  @media screen and (min-width: 760px) {
    h1 {
      font-size: 64px;
    }
  }
`;
