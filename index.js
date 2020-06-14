let postcss = require('postcss')

module.exports = postcss.plugin('postcss-rn', (opts = { }) => {

  // Work with options here

  return function (root) {
    root.walkRules(rule => {
      rule.walkDecls(/^overflow-?/, decl => {
        if (decl.value === 'scroll') {
          let hasTouch = rule.some(i => {
            return i.prop === '-webkit-overflow-scrolling'
          })
          if (!hasTouch) {
            rule.append({
              prop: '-webkit-overflow-scrolling',
              value: 'touch'
            })
          }
        }
      })
    })
  }
})
