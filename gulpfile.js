'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat =  require('gulp-concat');
// var $ = require('gulp-load-plugins')();
var src = require('gulp-add-src');
var mainBowerFiles = require('main-bower-files');

var uglify = require('gulp-uglify');
var pump = require('pump');

console.log(mainBowerFiles({filter: /js$/}));

gulp.task('compress', function (cb) {
    pump([
            gulp.src(mainBowerFiles({filter: /js$/})),
            gulp.src('./app/script/**/*.js'),
            concat('./build.js'),
            gulp.dest('./app/script')
        ],
        cb
    );
});

// gulp.task('uglify', function () {
//     gulp.src('./app/script/**/*.js')
//         .pipe($.sourcemaps.init())
//         .pipe($.addSrc.prepend(mainBowerFiles()))
//         .pipe($.concat('./build.js'))
//         .pipe($.uglify())
//         .pipe($.sourcemaps.write('./'))
//         .pipe(gulp.dest('./build'));
// });
//
// gulp.task('jshint', function() {
//     gulp.src(['./gulpfile.js', './app/script/**/*.js'])
//         .pipe($.jshint({
//             esversion: 5
//         }))
//         .pipe($.jshint.reporter('default'));
// });

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
            port: 3000
        }));
});

gulp.task('default', ['compress', 'sass:watch', 'webserver']);