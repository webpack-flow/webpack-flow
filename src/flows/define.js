const webpack = require('webpack')

export default {
  name: 'define',
  config(obj) {
    return {
      plugins: [
        new webpack.DefinePlugin(obj)
      ]
    }
  }
}
