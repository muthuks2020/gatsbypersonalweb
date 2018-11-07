const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const coverLetterTemplate = path.resolve(`src/templates/cover-letter.js`)

  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/cover-letters/" } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: coverLetterTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
