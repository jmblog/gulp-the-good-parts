var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

function clean() {
  return del('dist');
}
clean.description = 'Clean up generated files.'

function styles(done) {
  console.log('task styles');
  done();
}
styles.description = 'Compile Sass to CSS.'

function scripts(done) {
  console.log('task scripts');
  done();
}
scripts.description = 'Generate JS files.'

function build(done) {
  console.log('task build');
  done();
}
build.description = 'Builds in production mode.'

gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('build', build);
gulp.task('default', function(done) {
  runSequence(
    'clean',
    ['styles', 'scripts'],
    'build',
    done
  )
});
