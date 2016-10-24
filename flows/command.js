const flow = require('../flow')

module.exports = (...flows) => {
  const meow = require('meow')
  const cli = meow()
  return command => cli.input[0] === command ? flow(flows) : null
}
