'use strict'

const assert = require('assert')
const path = require('path')
const load = (file) => require(path.join(__dirname, file))

const sinon = require('sinon')

it('should work', (done) => {
  const dbust = sinon.stub().returns(new Promise((resolve) => resolve()))
  const stats = {
    compilation: {
      chunks: [
        {
          name: 'unicorn',
          files: [ 'unicorn-hash.js' ],
        }
      ]
    }
  }
  const cb = (err) => {
    assert(dbust.calledWith({ 'unicorn.js': 'unicorn-hash.js' }))
    done(err)
  }
  const compiler = {
    plugin: (event, fn) => fn(stats, cb),
  }
  const Plugin = load('../plugin.js')(() => dbust)

  const plugin = new Plugin({})
  plugin.apply(compiler)
})

it('should do stuff', () => {
  const stub = sinon.stub()
})
