const {src, dest} = require('gulp');

const sass = require('gulp-sass');

const imageMin = require('gulp-imagemin');

const concat = require('gulp-concat');

const watch = require('gulp-watch');

exports.styles = function styles(){
	return src('./dev/sass/**/*.sass')
    .pipe(sass())
    .pipe(dest('./assets/css/'))
}

exports.lib = function lib(){
	return src(['./dev/bower_components/jquery/dist/jquery.min.js','./dev/bower_components/semantic-ui-sass/app/assets/javascripts/**/*.js'])
    .pipe(concat('lib.js'))
    .pipe(dest('./assets/js/'))
}

exports.imageMin = function imageMin(){
	return src('images/*')
    .pipe(imagemin())
	.pipe(dest('./assets/images'))
}

exports.watcher = function watcher(){
	return watch('./dev/sass/**/*.sass', function () {
		src('./dev/sass/**/*.sass')
			.pipe(sass())
            .pipe(dest('./assets/css'));
    });
}