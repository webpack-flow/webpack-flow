// run node ./examples/command.js run

const flow = require('../')

const config = flow(
  flow.command(
    flow.entry('./src/index.js'),
    flow.extensions(['', '.js'])
  )('run')
)

console.log(config)
