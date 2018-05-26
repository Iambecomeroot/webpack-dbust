'use strict'

let _dbust, _options

const plugin = function (options) {
  _options = options
  _dbust.options(options)
}

plugin.prototype.apply = compiler => {
  compiler.hooks.done.tap('dbust', (stats, cb) => {
    const chunks = stats.compilation.chunks
    const files = {}

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i]
      const name  = `${chunk.name}.js`

      files[name] = chunk.files[0]
    }

    _dbust.put(files)
    if (_options && _options.autosave) _dbust.save()

    if (typeof cb !== 'undefined') cb()
  })
}

module.exports = dbust => {
  _dbust = dbust
  return plugin
}
