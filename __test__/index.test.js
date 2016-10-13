const path = require('path')
const flow = require('../')
const entry = require('../entry')
const output = require('../output')
const extensions = require('../extensions')

test('entry and output', () => {
  const config = flow(
    entry('./src/index.js'),
    output('./dist/bundle.js', {publicPath: '/'})
  )
  expect(config).toEqual({
    entry: './src/index.js',
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    }
  })
})

test('resolve extensions', () => {
  const config = flow(extensions(['', '.js', '.css']))
  expect(config).toEqual({
    resolve: {
      extensions: ['', '.js', '.css']
    }
  })
})
