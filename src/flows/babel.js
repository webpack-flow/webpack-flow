export default {
  name: 'babel',
  config({
    enforce,
    test = /\.jsx?$/,
    loader = 'babel-loader',
    include,
    exclude = [/node_modules/],
    ...options
  } = {}) {
    return {
      module: {
        rules: [
          {
            enforce,
            test,
            loader,
            include,
            exclude,
            options
          }
        ]
      }
    }
  }
}
