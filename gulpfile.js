var gulp = require('gulp');
var browserify = require('gulp-browserify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');


var BUILD_DEST = './';

gulp.task('browserify', function () {
  return gulp.src('js/main.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(path.join(BUILD_DEST, 'js')));
});

gulp.task('minify-css', function() {
  return gulp.src(['css/**/*.css', 'node_modules/material-design-lite/material.min.css'])
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.join(BUILD_DEST, 'css')));
});

gulp.task('dist', ['minify-css'], function () {
  return gulp.src('js/main.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(path.join(BUILD_DEST, 'js')));
});

gulp.task('watch', ['minify-css', 'browserify'], function () {
  return gulp.watch([
    './**/*.{html,js,css}', '!js/bundle.js', '!css/bundle.css', '!node_modules' 
  ], ['minify-css', 'browserify'], function () {
    console.log("BUILD");
  });
});
