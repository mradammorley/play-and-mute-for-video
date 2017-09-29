
// dependencies
const gulp = require('gulp');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const open = require('gulp-open');
const runSequence = require('run-sequence');

// read in the package file
const pkg = require('./package.json');



gulp.task('connect', function() {
    connect.server({
        root: ['dev'],
        port: 8889,
        livereload: true,
        //livereload: { port: '9999' }
    });
});

gulp.task('open', function() {
    var options = {
        uri: 'http://localhost:8889'
        // app: 'Google Chrome' on Max OSX or 'chrome' on Windows
        // app: 'firefox'
    };
    gutil.log('-----------------------------------------');
    gutil.log('Opening browser to:', gutil.colors.yellow('http://localhost:8889'));
    gutil.log('-----------------------------------------');
    gulp.src(__filename)
        .pipe(open(options));
});


gulp.task('serve', function(callback) {
    runSequence(['connect'], ['open'],
        callback);
});


gulp.task('default', ['serve']);
