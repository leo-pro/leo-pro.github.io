const gulp = require('gulp');

const sass = require('gulp-sass');

const imageMin = require('gulp-imagemin');

const minify = require('gulp-minify');

exports.styles = function styles(){
	return src('sass/**/*.sass')
    .pipe(sass())
    .pipe(dest('../assets/css/'))
}

exports.lib = function lib(){
	return src(['bower_components/jquery/dist/jquery.min.js','bower_components/popper.js/dist/popper.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('lib.js'))
    .pipe(dest('../assets/js/'))
}

exports.imageMin = function imageMin(){
	return src('images/*')
    .pipe(imagemin())
	.pipe(dest('../assets/images'))
}

exports.watcher = function watcher(){
	return watch('sass/**/*.sass', function () {
		src('sass/**/*.sass')
			.pipe(sass())
            .pipe(dest('../assets/css'));
    });
}