var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

var styles = function() {
  return gulp.src(config.src + '/**/!(_)*.{scss,sass}')
    .pipe(sass(config.sassOptions))
    .pipe(gulp.dest(config.dest));
}

gulp.task('styles', styles);
