/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    source = require('vinyl-source-stream'), // Used to stream bundle for further handling etc.
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    less = require('gulp-less'),
    mainBowerFiles = require('main-bower-files');

concat = require('gulp-concat');


gulp.task('css-client', function () {
    return gulp.src(mainBowerFiles(['**/*.css', '**/*.less']))
        .pipe(less())
        .pipe(gulp.dest('./client/css/'));
});


gulp.task('css', ['css-client'], function () {
    return gulp.src('./client/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css/'));
});