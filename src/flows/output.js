import path from 'path'
import merge from 'lodash.merge'

export default {
  name: 'output',
  config(output, options) {
    return merge({
      output: {
        path: path.join(process.cwd(), path.dirname(output)),
        filename: path.basename(output)
      }
    }, {
      output: options
    })
  }
}
