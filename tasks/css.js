/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    source = require('vinyl-source-stream'), // Used to stream bundle for further handling etc.
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat');


gulp.task('css', function () {
    console.log("css");

    return gulp.src('./client/css/*.css')
        //.pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css/'));
});