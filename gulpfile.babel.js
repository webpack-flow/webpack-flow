import {task, input, output, watch} from 'gulp-named'
import babel from 'gulp-babel'

const paths = {
  js: './src/**/*.js'
}

task('js', () => {
  input(paths.js)
    .pipe(babel())
    .pipe(output('./dist'))
})

task('watch', () => {
  watch(paths.js, ['watch'])
})

task('build', ['js'])

task('default', ['build', 'watch'])
