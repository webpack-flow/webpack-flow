const path = require('path')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const {
  createConfig,
  entryPoint,
  setOutput,
  env,
  customConfig,
  addPlugins,
  setDevTool,
  defineConstants,
  webpack
} = require('@webpack-blocks/webpack2')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

module.exports = function (entry) {
  return createConfig([
    entryPoint(entry),
    defineConstants({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    env('development', [
      entryPoint([
        require.resolve('webpack-hot-middleware/client')
      ]),
      setOutput('dist/[name].js'),
      setDevTool('eval-source-map'),
      addPlugins([
        new FriendlyErrors(),
        new webpack.HotModuleReplacementPlugin()
      ])
    ]),
    env('production', [
      setOutput('dist/[name].[chunkhash:8].js'),
      setDevTool('source-map'),
      addPlugins([
        new ProgressPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compressor: {
            warnings: false
          },
          output: {
            comments: false
          }
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true
        })
      ])
    ]),
    customConfig({
      output: {
        publicPath: '/'
      },
      resolve: {
        modules: [
          process.cwd(),
          path.join(process.cwd(), 'node_modules'),
          path.join(__dirname, '../node_modules')
        ]
      },
      performance: {
        hints: false
      },
      resolveLoader: {
        modules: [
          path.join(process.cwd(), 'node_modules'),
          path.join(__dirname, '../node_modules')
        ]
      }
    })
  ])
}
