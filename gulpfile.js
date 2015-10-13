/**
 * Created by alex on 12.10.2015.
 */
var gulp = require('gulp');


require('./tasks/libs');
require('./tasks/app');
require('./tasks/css');

gulp.task('dev',['app','libs','css'], function () {
    return gulp.src('./client/index.html')
        .pipe(gulp.dest('./public/'));
});
