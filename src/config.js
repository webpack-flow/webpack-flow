import merge from 'webpack-merge'

export default class Config {
  constructor() {
    this.env = process.env.NODE_ENV
    this.configs = []
  }

  use(flow, extra) {
    let name
    if (typeof extra === 'function') {
      // .use(name, flow)
      name = flow
      flow = extra
    } else {
      // .use(flow)
      name = flow.name
    }
    const names = Array.isArray(name) ? name : [name]
    for (const name of names) {
      this[name] = (...args) => {
        this.configs.push(flow.config(...args))
      }
    }
    return this
  }

  buildConfig() {
    return merge.smart(...this.configs)
    return this
  }
}
