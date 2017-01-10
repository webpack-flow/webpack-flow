# webpack-flow

[![NPM version](https://img.shields.io/npm/v/webpack-flow.svg?style=flat)](https://npmjs.com/package/webpack-flow) [![NPM downloads](https://img.shields.io/npm/dm/webpack-flow.svg?style=flat)](https://npmjs.com/package/webpack-flow) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-flow/master.svg?style=flat)](https://circleci.com/gh/egoist/webpack-flow) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn global add webpack-flow
```

## Get started

Populate an entry file first, for example create a React app at `index.js`:

```js
import React from 'react'
import {render} from 'react-dom'

const App = () => <h2>Hello World!</h2>
render(<App />, document.getElementById('app'))
```

Then just run `webpack-flow` with `react` flow:

```bash
yarn add webpack-flow-react --dev

webpack-flow react index.js
```

And boom! Just open `http://localhost:4000` and see it in action :D

## Create a flow

A flow can control CLI options, webpack config and some internal options.

### Update webpack config

Here's an example flow to add a webpack loader:

```js
module.exports = function () {
  this.webpackConfig({
    module: {
      loaders: [
        {test: /\.vue$/, loader: require.resolve('vue-loader')}
      ]
    }
  })
}
```

We use [webpack-merge](https://github.com/survivejs/webpack-merge) to merge your config to [base config](/lib/base-config.js)

You can also use [webpack-blocks](https://github.com/andywer/webpack-blocks) to reduce the work:

```js
const babel = require('@webpack-blocks/babel6')

module.exports = function () {
  this.webpackConfig([
    babel(),
    // `@webpack-blocks/webpack` is available as `this.blocks`
    this.blocks.setOutput('dist/foo.js')
  ])
}
```

You can even directly mutate webpack config:

```js
module.exports = function () {
  this.$webpackConfig.entry.main.unshift(
    require.resolve('react-hot-loader/patch')
  )
}
```

### Set CLI options

`webpack-flow` uses [yargs](https://yargs.js.org) under the hood, you can access it via: `this.cli`:

```js
module.exports = function () {
  this.cli.option('sass', {
    description: 'Use Sass to compile CSS',
    default: true
  })

  if (this.cli.argv.sass) {
    this.webpackConfig({
      module: {
        loaders: [
          {test: /\.scss$/, loader: require.resolve('sass-loader')}
        ]
      }
    })
  }
}
```

### Set internal options

All CLI options can be set here.

#### html-webpack-plugin options

```js
module.exports = function () {
  this.config({
    html: {
      title: 'my app',
      template: path.resolve('./src/template.html')
    }
  })
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**webpack-flow** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/webpack-flow/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
