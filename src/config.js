import merge from 'webpack-merge'

export default class Config {
  constructor() {
    this.env = process.env.NODE_ENV
    this.configs = []
  }

  use(flow, extra) {
    let flowName
    if (typeof extra === 'function') {
      // .use(flowName, flow)
      flowName = flow
      flow = extra
    } else {
      // .use(flow)
      flowName = flow.name
    }
    const names = Array.isArray(flowName) ? flowName : [flowName]
    for (const name of names) {
      this[name] = (...args) => {
        this.configs.push(flow.config(...args))
      }
    }
    return this
  }

  buildConfig() {
    return merge.smart(...this.configs)
  }
}
