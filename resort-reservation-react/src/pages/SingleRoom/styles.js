import styled from "styled-components";

export const ContainerError = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoomContainer = styled.div`
  width: 80vw;
  margin: 0rem auto 2rem;
  padding: 4rem 0 0 0;
`;

export const RoomImages = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 10px;
`;

export const Img = styled.img`
  width: 90%;
  display: block;
`;

export const RoomInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const ContentTitle = styled.h3`
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  font-size: 1.2rem;
  margin: 2.25rem 0 1rem;
`;

export const DescriptionSection = styled.article`
  p {
    line-height: 1.5;
  }
`;

export const InfoSection = styled.article`
  p {
    margin: 0.75rem 0;
    letter-spacing: var(--mainSpacing);
  }
`;

export const ExtraSection = styled.section``;

export const ExtraList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`;
