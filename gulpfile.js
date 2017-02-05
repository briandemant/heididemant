var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var nodemon = require('gulp-nodemon');
var cleanCSS = require('gulp-clean-css');
var purify = require('gulp-purifycss');

const stylePath = "src/style/";


gulp.task('serve', ['less', 'nodemon', 'watch'], function() {
	browserSync.init(null, {
		ui             : false,
		open           : false,
		scrollThrottle : 100,
		reloadOnRestart: true,
		proxy          : "http://localhost:8080",
		files          : ["public/**/*.*"],
		port           : 3000,
	});
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
	return gulp.src(stylePath + 'style.less')
		.pipe(less())
		.pipe(cleanCSS({ compatibility: 'ie9' }))
		.pipe(purify(['./public/js/*.js', './public/**/*.html']))
		.pipe(gulp.dest("public/css"))
		.pipe(browserSync.stream());
});
  
gulp.task('nodemon', function(cb) {
	var started = false;

	return nodemon({
		script: 'index.js'
	}).on('start', function() {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	});
})

gulp.task('watch', function() {
	gulp.watch(stylePath + '*.less', ['less']);
});

gulp.task('default', ['serve']);
