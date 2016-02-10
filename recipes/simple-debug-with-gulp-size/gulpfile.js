var gulp = require('gulp');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
  return gulp.src('src/**/*.*')
    .pipe(size({title: 'Original:', showFiles: true}))
    .pipe(imagemin())
    .pipe(size({title: 'Optimized', showFiles: true}))
    .pipe(gulp.dest('dist'));
});
