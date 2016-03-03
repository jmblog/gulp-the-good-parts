var gulp = require('gulp');
var size = require('gulp-size');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('src/*.txt')
    .pipe(size({showFiles: true}))
    .pipe(concat('all.txt'))
    .pipe(size({showFiles: true}));
});
