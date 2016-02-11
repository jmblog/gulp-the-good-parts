var gulp = require('gulp');

function copy() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
}

copy.description = 'Copy files to another directory.'

gulp.task('default', copy);
