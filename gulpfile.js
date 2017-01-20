'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var $ = require('gulp-load-plugins')();
gulp.task('sass', function () {
    return gulp.src('./app/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/style/**/*.scss', ['sass']);
});

//$ npm install --save-dev gulp-webserver
gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            fallback: 'app/index.html',
            open: true,
            host : 'localhost',
            port: 3000,
        }));
});

gulp.task('uglify', function() {
    gulp.src('./app/script/**/*.js')           // create a stream from all .js files under src
        .pipe($.sourcemaps.init())      // keep track of the original line numbers
        .pipe($.concat('build.js'))     // join the contents of the files to build.js
        .pipe($.uglify())               // minimize it
        .pipe($.sourcemaps.write('./')) // emit a build.js.map
        .pipe(gulp.dest('./app/build'));    // stream the files into the build folder
});
gulp.task('default', ['sass:watch', 'webserver','uglify']);