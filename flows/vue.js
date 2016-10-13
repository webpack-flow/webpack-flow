module.exports = options => {
  options = options || {}
  const test = options.test || /\.vue$/
  const postcss = options.postcss
  const loaders = options.loaders || ['vue']
  const css = options.css

  return {
    module: {
      loaders: [
        {
          test,
          loaders
        }
      ]
    },
    postcss,
    vue: {
      postcss,
      loaders: {
        css
      }
    }
  }
}
