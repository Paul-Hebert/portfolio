const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync');

gulp.task('build', shell.task('npx eleventy --quiet'));

gulp.task('serve', function() {
  browserSync.init({
    server: { baseDir: './_site' }
  });
});

gulp.task('default', gulp.series('build', 'serve'));