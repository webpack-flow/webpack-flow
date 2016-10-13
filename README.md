# webpack-flow [![NPM version](https://img.shields.io/npm/v/webpack-flow.svg?style=flat-square)](https://npmjs.com/package/webpack-flow) [![NPM downloads](https://img.shields.io/npm/dm/webpack-flow.svg?style=flat-square)](https://npmjs.com/package/webpack-flow) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-flow/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-flow)

`webpack-flow` does not install any build dependencies for you, it's just a way to manage shareable webpack configs and make them reusable.

## Install

```bash
# yarn add webpack-flow --dev
$ npm install --D webpack-flow
```

## Usage

```js
// your webpack.config.js
const flow, {
  entry, output, extensions, babel //...
} = require('webpack-flow')

module.exports = flow(
  entry('./src/index.js'),
  output('./dist/bundle.js'),
  extensions: ['', '.js'],
  babel({
    presets: ['es2015']
  })
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
