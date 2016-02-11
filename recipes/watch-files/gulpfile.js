var gulp = require('gulp');
var watch = require('gulp-watch');
var size = require('gulp-size');

function build() {
  return gulp.src('src/**/*')
    .pipe(size({showFiles: true}));
}

gulp.task('build', build);

// Try to add, edit or delete files in `src` directory.
gulp.task('default', function () {
  watch('src/**/*', build);
});
