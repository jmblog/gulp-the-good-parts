var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var size = require('gulp-size');

function build() {
  return gulp.src('src/**/*')
    .pipe(size({showFiles: true}));
}

gulp.task('build', build);

gulp.task('default', function () {
  gutil.log(gutil.colors.black.bgYellow(' Try to add, edit or delete files in `watch-files/src` directory. '))
  watch('src/**/*', build);
});
