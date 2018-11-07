import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import withProps from 'recompose/withProps'

import sns from '../config/sns'

import linkedInIcon from '../images/linkedin.svg'
import githubIcon from '../images/github.svg'
import mediumIcon from '../images/medium.svg'


const List = styled.ul`
  display: inline-flex;
  margin: 0 auto;
`

const Item = styled.li`
  background
  font-size: 0;
  margin: 0 10px;
`

const IconLink = withProps({
  target: '_blank'
})(styled('a')`
  background: url(${props => props.icon}) no-repeat;
  display: block;
  font-size: 0;
  height: 40px;
  width: 40px;
`)

const Sns = ({ className }) => (
  <List className={className}>
   
    <Item>
      <IconLink href={sns.linkedIn} icon={linkedInIcon}>LinkedIn</IconLink>
    </Item>
    <Item>
      <IconLink href={sns.github} icon={githubIcon}>Github</IconLink>
    </Item>
    <Item>
      <IconLink href={sns.mediumlab} icon={mediumIcon}>Medium</IconLink>
    </Item>
  </List>
)

Sns.propTypes = {
  className: PropTypes.string
}

export default Sns
