var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync');


// sass
gulp.task('sass', function(){
  return gulp.src('../scss/alux.min.scss')
  .pipe(sassGlob())
  .pipe(sass({outputStyle: 'nested'}))
  .on('error', function(err) {
    console.error('\x07'); // so it doesn't just fail (literally) silently!
    sass.logError.bind(this)(err);
  })
  .pipe(cssnano())  // minify css
  .pipe(gulp.dest('../'));
});

//browser browserSync
gulp.task('browser-sync', function() {
  browserSync.init(["../scss/*.scss","../scss/**/*.scss", "../js/*.js","../**/*.php"], {
    proxy: "http://localhost/alux/",
    snippetOptions: {
       ignorePaths: "wp-admin/**"
    },
    notify: false
  });
});


// watch
gulp.task('watch', function(){
  gulp.watch('../scss/*.scss', ['sass']);
  gulp.watch('../scss/**/*.scss', ['sass']);
  //gulp.watch('../js/*.js', ['js']);
});


//deafult
gulp.task('default', ['sass', 'watch','browser-sync']);
