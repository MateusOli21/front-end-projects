import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;

  @media screen and (min-width: 760px) {
    max-width: 54rem;
    align-items: flex-start;
    padding: 0 5rem 0 0;
  }
`;
