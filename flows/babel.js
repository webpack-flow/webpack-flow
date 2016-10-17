module.exports = options => {
  options = options || {}
  const test = options.test || /\.jsx?$/
  const loader = options.loader || 'babel'
  const exclude = options.exclude || [/node_modules/]

  delete options.test
  delete options.loaders
  delete options.exclude

  return {
    module: {
      loaders: [
        {
          test,
          loader,
          exclude,
          query: options
        }
      ]
    }
  }
}
