import React from 'react'
import PropTypes from 'prop-types'

const Markdown = ({ className, source }) => (
  <div className={className} dangerouslySetInnerHTML={{__html: source}} />
)

Markdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
}

export default Markdown
