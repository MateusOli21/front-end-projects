import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;
  background: var(--mainGrey);
  text-align: center;
`;

export const ServicesContent = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 2rem;
`;

export const Service = styled.article``;

export const Icon = styled.span`
  display: block;
  font-size: 2rem;

  color: var(--primaryColor);
`;

export const Title = styled.h4`
  letter-spacing: var(--mainSpacing);
  margin: 1rem 0;
`;

export const Description = styled.p`
  width: 85%;
  margin: 0 auto;
`;
