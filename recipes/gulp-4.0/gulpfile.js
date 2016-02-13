var gulp = require('gulp');
var del = require('del');

gulp.task('default', gulp.series(
  zero,
  gulp.parallel(one, two, three),
  four
));

gulp.task(zero);
gulp.task(one);
gulp.task(watch);

function zero(done) {
  console.log('zero');
  done();
}
zero.description = 'the initial task';

function one(done) {
  console.log('one');
  done();
}

function two(done) {
  console.log('two');
  done();
}

function three(done) {
  console.log('three');
  done();
}

function four(done) {
  console.log('four');
  done();
}

function watch() {
  gulp.watch('src1', one);
  gulp.watch('src2', two);
}
