import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import theme from '../config/theme'
import Container from './container'
import Markdown from './markdown'

const Wrapper = styled.div`
  background: ${theme.colors.black};
  font-size: 140%;
`

const Headline = styled(Container)`
  color: ${theme.colors.white};
  text-align: right;
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        content: markdownRemark(fileAbsolutePath: { regex: "/hero.md$/" }) {
          html
        }
      }
    `}

    render={data => (
      <Wrapper>
        <Headline>
          <Markdown source={data.content.html} />
        </Headline>
      </Wrapper>
    )}
  />
)

export default Hero
