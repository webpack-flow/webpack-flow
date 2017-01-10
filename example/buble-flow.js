module.exports = function () {
  const {setOutput} = this.blocks
  this.webpackConfig([
    setOutput('./dist/foo.js')
  ])
  this.config({
    port: 3000
  })
}
