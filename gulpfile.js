var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var watchify = require('watchify');

var paths = {
    main_js: ['./app/app.js'],
    build_js: 'bundle.js',
    build_folder: 'public/js'
};

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
		.pipe(gulp.dest(paths.build_folder))
});

gulp.task('default', ['browserify']);