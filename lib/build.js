const {webpack} = require('@webpack-blocks/webpack2')

module.exports = function (webpackConfig, options) {
  let compiler
  try {
    compiler = webpack(webpackConfig)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
  compiler.run((err, stats) => {
    console.log(stats.toString({
      chunks: false,
      children: false,
      modules: false,
      colors: true
    }))
  })
}
