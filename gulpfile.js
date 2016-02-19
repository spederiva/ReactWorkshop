/**
 * Created by sebastianp on 19/02/2016.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');

js('starter');
js('solution');
js('solution-es5');

gulp.task('watch', () => {
    gulp.watch(['starter/**/*.jsx', '!starter/builds/**/*.js'], ['js-starter']);
    gulp.watch(['solution/**/*.jsx', '!solution/builds/**/*.js'], ['js-solution']);
    gulp.watch(['solution-es5/**/*.jsx', '!solution-es5/builds/**/*.js'], ['js-solution-es5']);
    gulp.watch('./**/*.html', ['html']);
});

gulp.task('html', () => {
    gulp.src('./**/*.html')
        .pipe(connect.reload());

    gutil.log('HTML');
});

gulp.task('server', () => {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('default', ['watch', 'js-starter', 'js-solution', 'js-solution-es5', 'html', 'server'], () => {
    gutil.log('React Workshop');
});

function js(proj) {
    gulp.task('js-' + proj, () => {
        gutil.log('Js Transpilation');

        gulp.src(proj + '/src/**/*.jsx')
            //.pipe(concat('script.js'))
            .pipe(babel({presets: ['react', 'es2015']})).on('error', onError)
            .pipe(browserify({debug: true})).on('error', onError)
            //.pipe(uglify())
            .pipe(gulp.dest(proj + '/builds/js'))
            .pipe(connect.reload());
    });
}

function onError(err) {
    console.log(err);
    //this.emit('end');
}
