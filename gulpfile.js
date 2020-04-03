var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var less = require('gulp-less')
var nodemon = require('gulp-nodemon')
var cleanCSS = require('gulp-clean-css')
var purify = require('gulp-purifycss')

const stylePath = 'src/style/'

gulp.task('serve', ['less', 'watch'], function () {
	browserSync.init({
		                 ui: false,
		                 open: false,
		                 // scrollThrottle : 100,
		                 ghostMode: { scroll: false },
		                 reloadOnRestart: true,
		                 server: {
			                 baseDir: './public',
		                 },
	                 })
	gulp.watch('public/*.html')
		.on('change', browserSync.reload)

})

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function () {
	return (gulp
		.src(stylePath + 'style.less')
		.pipe(less())
		.pipe(cleanCSS({ compatibility: 'ie9' }))
		// .pipe(purify(['./public/js/*.js', './public/**/*.html']))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream()))
})

gulp.task('watch', function () {
	gulp.watch(stylePath + '*.less', ['less'])
})

gulp.task('build', ['less'])
gulp.task('default', ['serve'])
