const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync');

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('build', shell.task('npx eleventy --quiet'));

gulp.task('watch', function() {
    gulp.watch(['src/**'], gulp.series('build', 'reload'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: { baseDir: './_site' }
    });
});

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));