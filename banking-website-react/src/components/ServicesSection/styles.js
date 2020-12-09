import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (min-width: 760px) {
    margin-top: 3.2rem;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
