import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    padding: 0 4.2rem;
  }
`;
