var gulp = require('gulp');
var runSequence = require('run-sequence');

function task_A(done) {
  console.log('task_A');
  done();
}

function task_B(done) {
  setTimeout(function() {
    console.log('task_B');
    done();
  }, 3000);
}

function task_C(done) {
  setTimeout(function() {
    console.log('task_C');
    done();
  }, 1000);
}

function task_D(done) {
  setTimeout(function() {
    console.log('task_D');
    done();
  }, 2000);
}

function task_E(done) {
  console.log('task_E');
  done();
}

gulp.task('task_A', task_A);
gulp.task('task_B', task_B);
gulp.task('task_C', task_C);
gulp.task('task_D', task_D);
gulp.task('task_E', task_E);

gulp.task('default', function(done) {
  runSequence('task_A',                       // Run A first
              ['task_B', 'task_C', 'task_D'], // B, C and D in parallel
              'task_E',                       // then E
              done);                          // Don't forget callback
});
