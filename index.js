'use strict'

const path = require('path')
const load = (file) => require(path.join(__dirname, file))

const dbust = require('dbust')

const plugin = load('plugin.js')

module.exports = plugin(dbust)
