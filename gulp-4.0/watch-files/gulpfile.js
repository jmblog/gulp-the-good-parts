var gulp = require('gulp');
var size = require('gulp-size');

gulp.task(watch);
gulp.task(example);
gulp.task('default', gulp.series('watch'));

function example() {
  console.log(gulp.lastRun(example));
  return gulp.src('src/*', {since: gulp.lastRun(example)})
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest('dist'));
}

function watch() {
  gulp.watch('src/*', example);
}
