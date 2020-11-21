import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import ImageC from "../components/Image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ImageC />
  </Layout>
)

export default IndexPage
