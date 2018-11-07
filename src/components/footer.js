import React from 'react'
import styled from 'react-emotion'

import theme from '../config/theme'
import Container from './container'

const Wrapper = styled.div`
  background: ${theme.colors.eastBay};
  color: ${theme.colors.moonRaker};
`

const FooterContainer = styled(Container)`
  padding: 40px 20px;
`

const Footer = () => (
  <Wrapper>
    <FooterContainer>
      Copyright &copy; {(new Date()).getFullYear()}
    </FooterContainer>
  </Wrapper>
)

export default Footer
