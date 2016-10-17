const webpack = require('webpack')

module.exports = options => {
  options = options || {}
  const sourceMap = options.sourceMap === false ? false : true

  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap,
        compressor: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ]
  }
}
