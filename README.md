# webpack-flow [![NPM version](https://img.shields.io/npm/v/webpack-flow.svg?style=flat-square)](https://npmjs.com/package/webpack-flow) [![NPM downloads](https://img.shields.io/npm/dm/webpack-flow.svg?style=flat-square)](https://npmjs.com/package/webpack-flow) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-flow/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-flow)

`webpack-flow` does not install any build dependencies for you, it's just a way to manage sharable webpack configs and make them reusable.

## Install

```bash
# yarn add webpack-flow --dev
$ npm install -D webpack-flow
```

## Usage

```js
// your webpack.config.js
const flow = require('webpack-flow')

module.exports = flow(config => {
  config.entry('./src/index.js')

  if (config.env === 'production') {
    config.output('./dist/[name].[chunkhash:8].js')
    config.compress()
    config.devtool('source-map')
  } else {
    config.output('./dist/[name].js')
    config.devtool('eval-source-map')
  }

  config.babel({
    test: /.jsx?/,
    presets: [
      ['es2015', {modules: false}]
    ]
  })
})
```

## Create your own flow

Config created by each flow will be merged into the baseConfig `{}` in order, so a flow is an object with its name and a function which returns a webpack config object. For example, you want a reusable typescript flow:

```js
// my-ts-flow.js
module.exports = {
  name: 'ts',
  config(options) {
    return {
      module: {
        loaders: [
          {test: /\.tsx?$/, loader: 'ts', query: options}
        ]
      }
    }
  }
}
```

And then you can use it in your webpack config:

```js
// webpack.config.js
const ts = require('./my-ts-flow')

module.exports = flow(config => {
  config.use(ts).ts(options)
})
```

Check out the [built-in](https://github.com/webpack-flow/webpack-flow/tree/master/src/flows) flows for reference.

## Built-in Flows

### entry

The arguments of entry flow are the same as webpack entry.

```js
config.entry('./src.js')
// or multi entry
config.entry({
  client: './src.js'
})
// ...
```

### output

```js
// the first argument of output flow is the file path.
// it will be parsed into {filename, path}
config.output('./dist/bundle.js')
// the second argument is an optional webpack output option
// which will be merged into {filename, path}
config.output('./dist/bundle.js', {publicPath: '/'})
// yields => {output: {filename, path, publicPath}}
```

### extensions

Resolve extensions. The same as webpack resolve.extensions.

```js
config.extensions(['', '.js', '.jsx'])
// alias to config.ext()
```

### babel

Built-in babel flow. It has the same options as in babel itself with addtional: `loader` `test` `exclude` `include` `enforce` options

```js
// however .babelrc is more recommended
config.babel({
  presets: ['es2015'],
  exclude: [/node_modules/]
})
```

### compress

UglifyJS flow.

```js
config.compress()
```

### devtool

devtool flow.

```js
config.devtool('source-map')
```

### merge

Directly merge a webpack config without thinking.

```js
config.merge({
  plugins: [/* blah.. */]
})
```

## API

### config.env

The value of `process.env.NODE_ENV`

### config.use(flow: object)

Register a flow which is:

```js
const myFlow = {
  name: 'myFlow',
  config() {
    // return a webpack config object
    return {}
  }
}

config.use(myFlow)
```

The name could also be an array, like `['ts', 'typescriot']` so that both `config.ts` and `config.typescript` are available.

### config.use(name: string|array, flow: function)

Similar to `config.use(flow: object)` but register name when you register the flow:

```js
const myFlow = options => {
  // return a webpack config object
  return {}
}

config.use('myFlow', myFlow)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
