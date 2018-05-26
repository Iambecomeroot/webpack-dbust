/* global it */
 
'use strict'

const assert = require('assert')
const sinon = require('sinon')
const dbust = require('dbust')

const stats = {
  compilation: {
    chunks: [{
      name: 'unicorn',
      files: [ 'unicorn-hash.js' ],
    }]
  }
}

const stub = {
  put: sinon.stub().returns(Promise.resolve()),
  options: sinon.stub(),
}

it('should work in the best case', done => {

  const cb = err => {
    assert(stub.put.calledWith({ 'unicorn.js': 'unicorn-hash.js' }))
    done(err)
  }
  const compiler = {
    hooks: {
      done: {
        tap: (_, fn) => fn(stats, cb),
      },
    },
  }
  const Plugin = require(__dirname + '/plugin.js')(stub)

  const plugin = new Plugin()
  plugin.apply(compiler)
})

it('should act as a proxy for options', () => {

  const Plugin = require(__dirname + '/plugin.js')(dbust)

  new Plugin({
    base: '/some/weird/path',
    manifest: 'not-manifest.json',
  })

  assert.deepEqual(dbust._getOptions(), {
    base: '/some/weird/path',
    manifest: '/some/weird/path/not-manifest.json',
  })
})

