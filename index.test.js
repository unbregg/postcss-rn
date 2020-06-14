const fs = require('fs')
let postcss = require('postcss')

let plugin = require('./')
let customStringifier = require('./stringify')
// let plugin = require('./')

// async function run (input, output, opts) {
//   let result = await postcss([plugin(opts)]).process(input, { from: undefined })
//   expect(result.css).toEqual(output)
//   expect(result.warnings()).toHaveLength(0)
// }

// it('does something', async () => {
//   await run('a{ }', 'a{ }', { })
// })

const input = fs.readFileSync('./index.css', 'utf-8')
const result = postcss([plugin({})]).process(input, {
  from: undefined,
  stringifier: customStringifier
})
console.log(result.css)
