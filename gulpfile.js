var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var watchify = require('watchify');
var nodemon = require('nodemon');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
var growl = require('gulp-notify-growl');
var react = require('gulp-react');

var paths = {
    main_js: ['./app/app.js'],
    build_js: 'bundle.js',
    build_folder: 'public/js'
};

gulp.task('jshint', function () {
	return gulp.src([
			'gulpfile.js',
			'./app/app.js',
			'./app/**/*.js'
		])
	    .pipe(react())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
		/*.pipe(notify({
		    title: 'JSHint',
		    message: 'JSHint Passed. Let it fly!',
		}))*/
});

gulp.task('browserify', function () {
	var bundler = browserify({
      entries: paths.main_js,
      debug: true,
    });

	bundler = watchify(bundler);

	return bundler
		.transform(reactify)
        .bundle()
		.pipe(source(paths.build_js))
		.pipe(gulp.dest(paths.build_folder));
});

gulp.task('start', function () {
	nodemon({
		script: 'server.js'
	});
});

gulp.task('default', ['browserify', 'start']);