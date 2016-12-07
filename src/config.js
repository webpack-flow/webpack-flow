import merge from 'webpack-merge'

export default class Config {
  constructor({
    flows = []
  } = {}) {
    this.env = process.env.NODE_ENV
    this.configs = []
    // apply global flows
    if (flows.length > 0) {
      for (const flow of flows) {
        this.use(flow.flow, flow.extra)
      }
    }
  }

  use(flow, extra) {
    let flowName
    let fn
    if (typeof extra === 'function') {
      // .use(flowName, flow)
      flowName = flow
      fn = extra
    } else {
      // .use(flow)
      flowName = flow.name
      fn = flow.config
    }
    const names = Array.isArray(flowName) ? flowName : [flowName]
    for (const name of names) {
      this[name] = (...args) => {
        this.configs.push(fn(...args))
      }
    }
    return this
  }

  buildConfig() {
    return merge.smart(...this.configs)
  }
}
