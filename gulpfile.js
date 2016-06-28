var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('dev', function() {
    connect.server({
        port: 8800
    });
});

