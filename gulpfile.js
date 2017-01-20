'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sass', function () {
    return gulp.src('./app/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/style/**/*.scss', ['sass']);
});

//$ npm install --save-dev gulp-webserver
gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            fallback: 'app/index.html',
            open: true,
            host: 'localhost',
            port: 3000
        }));
});

gulp.task('default', ['sass:watch', 'webserver']);