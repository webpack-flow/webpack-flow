import Config from './config'
import entry from './flows/entry'
import babel from './flows/babel'
import compress from './flows/compress'
import define from './flows/define'
import devtool from './flows/devtool'
import extensions from './flows/extensions'
import output from './flows/output'
import merge from './flows/merge'

export default function flow(callback) {
  const config = new Config()

  // register built-in flows
  config.use(entry)
  config.use(babel)
  config.use(compress)
  config.use(define)
  config.use(devtool)
  config.use(extensions)
  config.use(output)
  config.use(merge)

  callback(config)

  return config.buildConfig()
}
