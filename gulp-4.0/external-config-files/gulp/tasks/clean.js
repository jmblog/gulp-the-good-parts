var gulp = require('gulp');
var del = require('del');
var config = require('../config');

var clean = function() {
  return del(config.dest);
}

gulp.task('clean', clean);
