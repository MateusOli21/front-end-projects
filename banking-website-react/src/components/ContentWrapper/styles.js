import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.4rem 2rem 6.4rem;

  @media screen and (min-width: 760px) {
    flex-direction: ${({ column }) => (column ? "column" : "row")};
    padding: 0 4.2rem;
  }
`;
