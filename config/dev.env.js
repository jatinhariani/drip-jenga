'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DRIP_JENGA_API: JSON.stringify(process.env.DRIP_JENGA_API)
})
