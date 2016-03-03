var gulp = require('gulp');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var size = require('gulp-size');

gulp.task('watch', function () {
  return gulp.src('src/**/*')
    .pipe(watch('src/**/*'))
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', runSequence(['watch']));
