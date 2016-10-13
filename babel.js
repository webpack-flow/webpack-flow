module.exports = options => {
  const test = options.test || /\.jsx?$/
  const loader = options.loader || 'babel'
  const exclude = options.exclude || [/node_modules/]

  delete options.test
  delete options.loader
  delete options.exclude

  return {
    module: {
      loaders: [
        {
          test,
          loader,
          exclude
        }
      ]
    },
    babel: options
  }
}
