import path from 'path'
import flow from '../src'

test('entry and output', () => {
  const config = flow(config => {
    config.entry('./src/index.js'),
    config.output('./dist/bundle.js', {publicPath: '/'})
  })
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
  const config = flow(config => {
    config.extensions(['', '.js', '.css'])
  })
  expect(config).toEqual({
    resolve: {
      extensions: ['', '.js', '.css']
    }
  })
})

test('compress', () => {
  const config = flow(config => {
    config.compress()
  })
  expect(config.plugins[0].constructor.name).toBe('UglifyJsPlugin')
})

test('allow array', () => {
  const config = flow(config => {
    config.entry('./src/index.js'),
    config.extensions(['', '.js'])
  })
  expect(config).toEqual({
    entry: './src/index.js',
    resolve: {
      extensions: ['', '.js']
    }
  })
})
