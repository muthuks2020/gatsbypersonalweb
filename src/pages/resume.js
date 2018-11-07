import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Markdown from '../components/markdown'

const ResumePage = ({ data }) => (
  <Layout>
    <Container>
      <Markdown source={data.content.html} />
    </Container>
  </Layout>
)

export default ResumePage

export const query = graphql`
  query {
    content: markdownRemark(fileAbsolutePath: { regex: "/resume.md$/" }) {
      html
    }
  }
`
