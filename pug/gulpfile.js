var gulp = require('gulp'),
	pug = require('gulp-pug');

gulp.task('default',['pug','watch']);

gulp.task('pug', () => {
  return gulp.src(['./*.pug', '!./_*.pug'])
  .pipe(pug({
    pretty: '\t'
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('watch',() => {
	gulp.watch(['./*.pug'],['pug']);
});
