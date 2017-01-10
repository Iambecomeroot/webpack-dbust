'use strict'

const path = require('path')

let dbust = require('dbust')

function plugin(options){
  if(!options || typeof options !== 'object') options = {}

  if(!('base' in options)) options.base = path.dirname(module.parent.filename)

  dbust = dbust(options)
}

plugin.prototype.apply = (compiler) => {
  compiler.plugin('done', (stats) => {
    const chunks = stats.compilation.chunks
    const files  = {}

    for(let i = 0; i < chunks.length; i++){
      const chunk = chunks[i]
      const name  = `${chunk.name}.js`

      files[name] = chunk.files[0]
    }

    dbust(files)
  })
}

module.exports = plugin
