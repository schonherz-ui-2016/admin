'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
 var $ = require('gulp-load-plugins')();
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

// gulp.task('uglify', function() {
//     gulp.src('./app/script/**/*.js')           // create a stream from all .js files under src
//         .pipe($.sourcemaps.init())      // keep track of the original line numbers
//         .pipe($.concat('build.js'))     // join the contents of the files to build.js
//         .pipe($.uglify())               // minimize it
//         .pipe($.sourcemaps.write('./')) // emit a build.js.map
//         .pipe(gulp.dest('./app/build'));    // stream the files into the build folder
// });

// gulp.task('uglify',function() { // előbb a jshint-et futtatja, mivel be lett húzva függőségnek
//     gulp.src('./src/**/*.js')           // create a stream from all .js files under src
//     // .pipe($.plumber())              // prevent pipe from breaking
//         .pipe($.plumber())          // prevent pipes from breaking ha a scsss-ben hiba van mikor megy a gulp watch, akkor kilép a watchból
//         .pipe($.sourcemaps.init())      // keep track of the original line numbers
//         .pipe($.babel({                 // transpile ES6 to ES5
//             presets: ['latest']         // use the latest (es2017) features
//         }))
//         .pipe($.addSrc.prepend(mainBowerFiles()))
//         .pipe($.concat('build.js'))     // join the contents of the files to build.js
//         .pipe($.uglify())               // minimize it
//         .pipe($.sourcemaps.write('./')) // emit a build.js.map
//         .pipe(gulp.dest('./build'));    // stream the files into the build folder
//
// });

gulp.task('compress', function (cb) {
    pump([
            gulp.src(mainBowerFiles({filter: /js$/})),
            uglify(),
            concat('./bower.js'),
            gulp.dest('./app/script')
        ],
        cb
    );
});
gulp.task('compress2', function (cb) {
    pump([
            gulp.src('./app/script/**/*.js'),
            uglify(),
            concat('./build.js'),
            gulp.dest('./app/script')
        ],
        cb
    );
});
gulp.task('default', ['sass:watch', 'webserver', 'compress','compress2']);