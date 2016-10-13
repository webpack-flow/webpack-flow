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
const flow, {
  entry, output, extensions, babel, env //...
} = require('webpack-flow')

module.exports = flow(

  entry('./src/index.js'),

  output('./dist/bundle.js'),

  extensions(['', '.js']),

  babel({
    presets: ['es2015']
  }),

  // the env flow
  // only returns relevant config when process.env.NODE_ENV matched
  env(
    compress()
  )('production')

)
```

## Create your own flow

Each flow will be merged into the baseConfig `{}` in order, so a flow is simply a function which returns a webpack config object. For example, you want a reusable typescript flow:

```js
// my-ts-flow.js
module.exports = (options) => {
  return {
    module: {
      loaders: [
        {test: /\.tsx?$/, loader: 'ts'}
      ]
    },
    ts: options
  }
}
```

And then you can use it in your webpack config:

```js
// webpack.config.js
const ts = require('./my-ts-flow')

module.exports = flow(
  // ... other flows
  ts(options)
)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
