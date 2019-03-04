const gulp = require('gulp');
const shell = require('gulp-shell');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');

const outputDirectory = './_site/'

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('css', () => {
    return gulp.src('src/**/*.css')
      .pipe( sourcemaps.init() )
      .pipe( postcss([ autoprefixer() ]) )
      .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest(outputDirectory) )
});

gulp.task('content', shell.task('npx eleventy --quiet'));

gulp.task('build', gulp.parallel('css', 'content'));

gulp.task('watch', function() {
    gulp.watch(['src/**'], gulp.series('build', 'reload'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: { baseDir: outputDirectory }
    });
});

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));