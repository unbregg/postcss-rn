let postcss = require('postcss')

module.exports = postcss.plugin('postcss-rn', (opts = { }) => {

  // Work with options here

  return (root, result) => {

    // Transform CSS AST here

  }
})
