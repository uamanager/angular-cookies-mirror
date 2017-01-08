var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var src = [
    './src/cookies-mirror.module.js',
    './src/**/*.js'
];

var dist = 'angular-cookies-mirror.js';

gulp.task('default', function(){
    return gulp
        .src(src)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat(dist))
        .pipe(plugins.ngAnnotate({
            remove: true,
            add: true,
            single_quotes: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./'))
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.rename({
            suffix: '.sourcemaps'
        }))
        .pipe(gulp.dest('./'));
});