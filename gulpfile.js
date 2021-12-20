const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/* Compile SCSS to CSS */
function buildStyles() {
	return src('src/scss/**/*.scss').pipe(sass()).pipe(dest('src/css'));
}

/* Watching for change in the sass files */
function watchChange() {
	watch(['src/scss/**/*.scss'], buildStyles);
}

/* Export and run the two function in order */
exports.default = series(buildStyles, watchChange);
