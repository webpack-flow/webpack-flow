const path = require('path')
const merge = require('lodash.merge')

module.exports = (output, options) => {
  return merge({
    output: {
      path: path.join(process.cwd(), path.dirname(output)),
      filename: path.basename(output)
    }
  }, {
    output: options
  })
}
