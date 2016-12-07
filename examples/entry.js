require('babel-register')
const flow = require('../src')

const config = flow.default(config => {
  config.entry('./src/index.js')
  config.entry({other: './src/other.js'})
  config.entry({another: './src/another.js'})
})

console.log(config)
