import styled from "styled-components"

export const Container = styled.div`
  margin: 110px 0;
  padding: 0 20px;

  h1 {
    text-align: center;
    margin-bottom: 80px;
  }
`

export const ImagesGrid = styled.div`
  column-count: 2;
  gap: 10px;

  @media screen and (min-width: 760px) {
    column-count: 3;
  }

  @media screen and (min-width: 960px) {
    column-count: 4;
  }
`

export const ImageContainer = styled.figure`
  margin: 0;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;

  .img-item {
    width: 100%;
    max-width: 600px;
    border-radius: 4px;
  }
`
