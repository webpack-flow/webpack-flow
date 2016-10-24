const flow = require('../flow')

module.exports = (...flows) => {
  return command => process.argv[2] === command ? flow(flows) : null
}
