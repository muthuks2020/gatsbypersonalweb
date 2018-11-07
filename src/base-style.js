import { injectGlobal } from 'react-emotion'
import { normalize } from 'polished'

import theme from './config/theme'

injectGlobal`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.families.base}, Arial, Helvetica, sans-serif;
    font-size: ${theme.fonts.sizes.base};
    font-weight: ${theme.fonts.weights.base};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.eastBay};
    font-weight: ${theme.fonts.weights.bold};
    margin: 0 0 20px 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0 0 10px 0;
  }

  input,
  select {
    -webkit-appearance: none;
    border-radius: 0;
  }

  a {
    color: ${theme.colors.eastBay};
  }
`
