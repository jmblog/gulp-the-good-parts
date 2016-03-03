import gulp from 'gulp';

const defaultTask = (done) => {
  console.log('Hello, gulp with ES2015');
  done();
}

gulp.task('default', defaultTask);
