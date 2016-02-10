var gulp = require('gulp');
var config = require('./gulp/config.js');
var conf = require('./gulp/config.json');

gulp.task('default', function() {
  console.log(config);
  console.log(conf);
});
