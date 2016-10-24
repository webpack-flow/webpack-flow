const meow = require('meow')
const merge = require('webpack-merge')

module.exports = (...flows) => {
  if (Array.isArray(flows[0])) flows = flows[0]

  if (!process.env.CLI) return handleFlows(flows)

  const cli = meow()
  cli.parse()

  return handleFlows(flows, cli)
}

function handleFlows(flows, cli) {
  return flows.reduce((current, next) => {
    return merge.smart(current, typeof next === 'function' ? next(cli) : next)
  }, {})
}
