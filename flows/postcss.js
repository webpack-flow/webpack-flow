module.exports = options => {
  options = options || {}
  const test = options.test || /\.css$/
  const loaders = options.loaders || ['style', 'css!postcss']

  delete options.test
  delete options.loaders

  return {
    module: {
      loaders: [
        {
          test,
          loaders
        }
      ]
    },
    postcss: options
  }
}
