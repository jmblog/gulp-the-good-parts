var gulp = require('gulp');
var watch = require('gulp-watch');
var loadPlugins = require('gulp-load-plugins');
var devtools = require('postcss-devtools');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

var $ = loadPlugins();

function styles() {
  var sassOptions = {
     includePaths: [
       'node_modules/bootstrap-sass/assets/stylesheets'
     ]
   };
   // (1) Pass only files which are not Sass partial files.
   // (2) Prevent pipe breaking when complie error happens
   // (3) Show error messages on desktop notification.
   // (4) Glob imports like sass-rails
  return gulp.src('src/**/!(_)*.{scss,sass}')  // (1)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>') // (3)
    })) // (2)
    .pipe($.sassGlob()) // (4)
    .pipe($.sass(sassOptions))
    .pipe($.postcss([
      devtools(),
      autoprefixer({browsers: ['last 1 versions', 'ie >= 10']}),
      csswring()
    ]))
    .pipe($.size({showFiles: true}))
    .pipe(gulp.dest('dist'));
}

gulp.task('styles', styles);

gulp.task('styles:watch', ['styles'], function () {
  watch('src/**/*.{scss,sass,css}', styles); // Watch all files
});

gulp.task('default', ['styles:watch']);
