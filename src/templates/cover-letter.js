import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Markdown from '../components/markdown'
import Container from '../components/container'
import '../base-style'

export default function Template({ data }) {
  return (
    <>
      <Helmet
        title={data.content.frontmatter.title}
      >
        <html lang="en" />
      </Helmet>
      <Container>
        <Markdown source={data.content.html} />
      </Container>
    </>
  )
}

export const query = graphql`
  query CoverLetterByPath($path: String!) {
    content: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
