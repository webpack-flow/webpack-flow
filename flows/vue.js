module.exports = options => {
  options = options || {}
  const postcss = options.postcss

  return {
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        }
      ]
    },
    postcss,
    vue: {
      postcss
    }
  }
}
