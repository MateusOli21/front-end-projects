import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  max-width: 26rem;

  img {
    width: 100%;
  }

  @media screen and (min-width: 760px) {
    max-width: 36rem;
    order: ${({ order }) => order && -1};
    margin-right: ${({ order }) => (order ? "6rem" : "0")};
  }

  @media screen and (min-width: 900px) {
    max-width: 42rem;
  }
`;
