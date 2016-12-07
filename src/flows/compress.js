import webpack from 'webpack'

export default {
  name: 'compress',
  config() {
    return {
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          },
          comments: false
        })
      ]
    }
  }
}
