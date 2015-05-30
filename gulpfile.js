var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var paths = {
    main_js: ['./app/app.js'],
    build_js: 'bundle.js',
    build_folder: 'public/js'
};

gulp.task('browserify', function () {
	return browserify({
	      entries: paths.main_js,
	      debug: true,
	    })
        .bundle()
		.pipe(source(paths.build_js))
		.pipe(gulp.dest(paths.build_folder))
});