const merge = require('webpack-merge')

module.exports = (...flows) => flows.reduce((current, next) => merge(current, next), {})
