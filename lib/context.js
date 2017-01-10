const path = require('path')
const webpackMerge = require('webpack-merge')
const blocks = require('@webpack-blocks/webpack2')
const merge = require('lodash.merge')

class Context {
  constructor({cli, webpackConfig, config}) {
    this.cli = cli
    this.env = process.env.NODE_ENV
    this.flows = []
    this.blocks = blocks
    this.webpack = this.blocks.webpack
    this.$webpackConfig = webpackConfig
    this.$config = config
  }

  webpackConfig(config) {
    if (Array.isArray(config)) {
      this.$webpackConfig = webpackMerge(this.$webpackConfig, this.blocks.createConfig(config))
    } else {
      this.$webpackConfig = webpackMerge(this.$webpackConfig, config)
    }
    return this
  }

  config(conf) {
    this.$config = merge(this.$config, conf)
  }

  extends(...flowNames) {
    const isArray = Array.isArray(flowNames[0])
    flowNames = flowNames[0]

    for (const flowName of flowNames) {
      const flowPath = (flowName.charAt(0) === '.' || flowName.charAt(0) === '/') ?
        path.resolve(process.cwd(), flowName) :
        path.resolve(process.cwd(), `webpack-flow-${flowName}`)

      const flow = require(flowPath)
      this.flows.push(flow)
    }

    return this
  }

  run() {
    for (const flow of this.flows) {
      const context = new Context({
        cli: this.cli,
        webpackConfig: this.$webpackConfig,
        config: this.$config
      })
      flow.call(context)
      this.$webpackConfig = context.$webpackConfig
      this.$config = context.$config
    }
    return this
  }
}

module.exports = Context
