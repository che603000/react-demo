/**
 * Created by alex on 12.10.2015.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat');




gulp.task('images', function () {
    return gulp.src('./client/images/*.*')
        .pipe(gulp.dest('./public/images/'));
});