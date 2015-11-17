/**
 * Created by alex on 12.10.2015.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean');


require('./tasks/libs');
require('./tasks/app');
require('./tasks/css');
require('./tasks/images');
require('./tasks/webpack');


gulp.task('clean', function () {
    return gulp.src('./public/', {read: false})
        .pipe(clean());
});

gulp.task('dev-wp', ['webpack', 'libs', 'css', 'images'], function () {
    return gulp.src('./client/index.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('dev', ['clean'], function () {
    return gulp.run('dev-wp');
});