import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import theme from '../config/theme'
import Container from './container'

const Wrapper = styled.div`
  background: ${theme.colors.black};
`

const HeaderContainer = styled(Container)`
  padding: 20px;
`

const NavLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
    </HeaderContainer>
  </Wrapper>
)

export default Header
