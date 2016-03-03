var gulp = require('gulp');

var defaultTask = function(done) {
  console.log('Hello, gulp!');
  done();
}

gulp.task('default', defaultTask);
