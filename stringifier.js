const transform = require('css-to-react-native').default

class Stringifier {
  constructor(builder) {
    this.builder = builder
  }

  stringify(root) {
    let nodes = root.nodes
    this.builder('{\n')
    nodes.forEach(node => {
      this.builder(`${ node.selector }: {\n`)
      if (node.type === 'rule') {
        let decls = node.nodes.map(decl => [decl.prop, decl.value])
        let declObjs = transform(decls)
        Object.keys(declObjs).forEach(key => {
          this.builder(`  ${ key }: ${ declObjs[key] },\n`)
        })
      }
      this.builder('}')
    })
    this.builder('\n}')
  }
}

module.exports = Stringifier
