const {webpack} = require('@webpack-blocks/webpack2')
const Server = require('./server')
const PostCompile = require('post-compile-webpack-plugin')

module.exports = function (webpackConfig, options) {
  webpackConfig.plugins.push(
    new PostCompile(() => {
      console.log(`> Open http://localhost:${options.port}`)
    })
  )
  const server = new Server(webpackConfig)
  server.listen(options.port)
}
