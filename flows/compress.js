const webpack = require('webpack')

module.exports = options => {
  options = options || {}

  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        },
        comments: false
      })
    ]
  }
}
