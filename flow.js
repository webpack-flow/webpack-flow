const merge = require('webpack-merge')

module.exports = (...flows) => {
  if (Array.isArray(flows[0])) flows = flows[0]

  return flows.reduce((current, next) => merge.smart(current, next), {})
}
