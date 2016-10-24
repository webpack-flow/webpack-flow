const webpack = require('webpack')

module.exports = obj => {
  return {
    plugins: [
      new webpack.DefinePlugin(obj)
    ]
  }
}
