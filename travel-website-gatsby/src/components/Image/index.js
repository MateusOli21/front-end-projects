import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, ImagesGrid, ImageContainer } from "./styles"

const ImageC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <h1>Veja os destinos</h1>

      <ImagesGrid>
        {data.allFile.edges.map((image, index) => (
          <ImageContainer key={index}>
            <Img
              className="img-item"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          </ImageContainer>
        ))}
      </ImagesGrid>
    </Container>
  )
}

export default ImageC
