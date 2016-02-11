var gulp = require('gulp');

function copy() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('backup'));
}

copy.description = 'Copy files to other directories.'

gulp.task('default', copy);
