const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat-css');

gulp.task('buildCSS', () => {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/css/minified'));
});

gulp.task('watch', function(){
    gulp.watch('public/css/*.css', gulp.series('buildCSS'))
});