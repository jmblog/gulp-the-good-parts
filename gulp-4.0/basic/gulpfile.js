var gulp = require('gulp');

var defaultTask = function(done) {
  console.log('Hello, gulp4!');
  done();
}

gulp.task('default', defaultTask);
