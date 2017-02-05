'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var src = require('gulp-add-src');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('sass', function () {
    return gulp.src('./app/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/style/**/*.scss', ['sass']);
});

gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            fallback: 'app/index.html',
            open: true,
            host: 'localhost',
            port: 3000
        }));
});

var taskName ='compress';
var srcBowerFiles = mainBowerFiles({filter: /js$/});
var file = './bower.js';

var compressed = function (taskName, bowerFiles, file) {
    gulp.task(taskName, function (cb) {
        pump([
                gulp.src(bowerFiles),
                uglify(),
                concat(file),
                gulp.dest('./app')
            ],
            cb
        );
    });
};
compressed(taskName, srcBowerFiles, file);

var taskName2 ='compress2';
var srcFiles = './app/script/**/*.js';
var file2 = './build.js';

compressed(taskName2,srcFiles, file2);
gulp.task('default', ['sass:watch', 'webserver', 'compress','compress2']);