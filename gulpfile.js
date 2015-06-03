var gulp = require('gulp'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	util = require('gulp-util'),
	source = require('vinyl-source-stream'),
	reactify = require('reactify'),
	watchify = require('watchify'),
	nodemon = require('nodemon'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	react = require('gulp-react');

var config = {
	production: !!util.env.production
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
});

gulp.task('browserify', function () {
	var bundler = browserify({
      entries: './app/app.js',
      debug: true
    });

	bundler = watchify(bundler);

	return bundler
		.transform(reactify)
        .bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('uglify', function () {
	return gulp.src('public/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('start', function () {
	nodemon({
		script: 'server.js'
	});
});

gulp.task('default', ['browserify', 'start']);
gulp.task('build', ['jshint', 'browserify', 'uglify']);