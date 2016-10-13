const path = require('path')
const webpack = require('webpack')
const flow = require('../')

test('entry and output', () => {
  const config = flow(
    flow.entry('./src/index.js'),
    flow.output('./dist/bundle.js', {publicPath: '/'})
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
  const config = flow(flow.extensions(['', '.js', '.css']))
  expect(config).toEqual({
    resolve: {
      extensions: ['', '.js', '.css']
    }
  })
})

test('compress', () => {
  const config = flow(flow.compress({webpack}))
  expect(config.plugins[0].constructor.name).toBe('UglifyJsPlugin')
})
