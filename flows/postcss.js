module.exports = options => {
  options = options || {}
  const test = options.test || /\.css$/
  const loader = options.loader || 'style!css!postcss'

  delete options.test
  delete options.loader

  return {
    module: {
      loaders: [
        {
          test,
          loader
        }
      ]
    },
    postcss: options
  }
}
