module.exports = options => {
  options = options || {}
  const webpack = options.webpack

  if (!webpack) {
    throw new Error('You need to pass webpack into the compress flow!')
  }

  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        comments: false
      })
    ]
  }
}
