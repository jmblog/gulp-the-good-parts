var gulp = require('gulp');
var gulpif = require('gulp-if');
var size = require('gulp-size');
var minimist = require('minimist');
var imagemin = require('gulp-imagemin');

var options = minimist(process.argv.slice(2), {
  boolean: [ 'debug' ]
});

function task() {
  return gulp.src('src/**/*.*')
    .pipe(gulpif(options.debug, size({title: 'Original:', showFiles: true})))
    .pipe(imagemin())
    .pipe(gulpif(options.debug, size({title: 'Optimized:', showFiles: true})))
    .pipe(gulp.dest('dist'));
}

task.description = 'Optimize images.';
task.flags = {
  '--debug': 'Show debug messages.'
}

gulp.task('default', task);
