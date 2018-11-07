import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'

import Container from './container'
import Markdown from './markdown'
import Sns from './sns'

const AboutContainer = styled(Container)`
  text-align: center;
`

const Photo = styled.img`
  border-radius: 50%;
  height: 200px;
  margin-bottom: 40px;
  width: 200px;
`

const SocialNetworks = styled(Sns)`
  margin-top: 40px;
`

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        content: markdownRemark(fileAbsolutePath: { regex: "/about.md$/" }) {
          frontmatter {
            avatar {
              publicURL
            }
          }
          html
        }
      }
    `}

    render={data => (
      <AboutContainer>
        <Photo src={data.content.frontmatter.avatar.publicURL} alt="me" />
        <Markdown source={data.content.html} />
        <SocialNetworks />
      </AboutContainer>
    )}
  />
)

About.propTypes = {
  data: PropTypes.node.isRequired
}

export default About
