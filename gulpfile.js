var gulp = require('gulp'),
    browserify = require('browserify'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    htmlToJs = require('gulp-html-to-js'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create();

// create a task that ensures the `js` task is complete before
// reloading browsers
// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });

// use default task to launch Browsersync and watch JS files
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    // gulp.watch("js/*.js", ['js-watch']);
});

/*
* Task - Deploy
* concat everything together into a single snippet
 */
gulp.task('deploy', function() {
    return gulp.src(['./build/*.js'])
        .pipe(concat('output.js'))
        .pipe(gulp.dest('dist/'));
});

/*
 * Task - Build
 * build js, css, html into build/*.js
 */
gulp.task('build', ['browserify','jshint']);

gulp.task('browserify', function() {
    return browserify({ entries: ['./src/main.js']})
      .bundle()
      .pipe(source('main.bundles.js'))
      .pipe(buffer())
      // .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function () {
    return gulp.src(['./src/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function () {
    return gulp.src(['./dist/'], { read: false })
        .pipe(clean());
});

/*
 * Task - Watch
 * watch for changes of js, css, html and build
 */
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.js'], ['jshint', 'browserify']);
});

/*
 * Task - Default
 * build and watch
 */
gulp.task('default', ['clean', 'build', 'serve', 'watch']);
