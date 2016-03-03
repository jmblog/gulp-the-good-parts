var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var newer = require('gulp-newer');
var size = require('gulp-size');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var del = require('del');

var dest = 'dist';

function changedDefault() {
  return gulp.src('src/*.txt')
    .pipe(changed(dest))
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest(dest));
}

function changedExtension() {
  return gulp.src('src/*.jade')
    .pipe(changed(dest, { extension: '.html'}))
    .pipe(jade())
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest(dest));
}

function changedSha1() {
  return gulp.src('src/*.css')
    .pipe(changed(dest, {hasChanged: changed.compareSha1Digest}))
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest(dest));
}

function newerDefault() {
  return gulp.src('src/*.txt')
    .pipe(newer(dest))
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest(dest));
}

function newerConcat() {
  return gulp.src('src/*.txt')
    .pipe(newer(dest + '/all.txt'))
    .pipe(concat('all.txt'))
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest(dest));
}

function clean() {
  return del(['src/*.*', dest + '/*.*']);
}

gulp.task('default', function(done) {
  console.log('See README.md');
  done();
})

gulp.task('clean', clean);
gulp.task('changedDefault', changedDefault);
gulp.task('changedExtension', changedExtension);
gulp.task('changedSha1', changedSha1);
gulp.task('newerDefault', newerDefault);
gulp.task('newerConcat', newerConcat);
