const path = require('path')
const express = require('express')
const {webpack} = require('@webpack-blocks/webpack2')

module.exports = class Server {
  constructor(webpackConfig) {
    this.server = express()

    let compiler
    try {
      compiler = webpack(webpackConfig)
    } catch (err) {
      console.error(err.message)
      process.exit(1)
    }
    const devMiddleWare = require('webpack-dev-middleware')(compiler, {
      quiet: true
    })

    this.server.use(devMiddleWare)
    this.server.use(require('webpack-hot-middleware')(compiler, {
      log: () => null
    }))

    const mfs = devMiddleWare.fileSystem
    const file = path.join(webpackConfig.output.path, 'index.html')

    this.server.get('*', (req, res) => {
      devMiddleWare.waitUntilValid(() => {
        const html = mfs.readFileSync(file)
        res.type('html')
        res.end(html)
      })
    })
  }

  listen(...args) {
    this.server.listen(...args)
  }
}
