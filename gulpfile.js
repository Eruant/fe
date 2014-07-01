var gulp = require('gulp'),
  cfg = require('./gulp-config'),
  templatizer = require('templatizer'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  browserSync = require('browser-sync');

gulp.task('default', ['all']);

gulp.task('all', ['server', 'watch']);

gulp.task('compile', ['compile-markup', 'compile-js']);

gulp.task('compile-templates', function () {
  templatizer(__dirname + '/' + cfg.src.templates, __dirname + '/' + cfg.dest.templates);
});

gulp.task('compile-markup', function () {
  return gulp.src(cfg.src.root + '/index.html')
    .pipe(gulp.dest(cfg.dest.root));
});

gulp.task('compile-js', ['js-browserify']);

gulp.task('js-browserify', ['compile-templates'], function () {
  var bundleStream = browserify(__dirname + '/' + cfg.src.browserify).bundle();

  bundleStream
    .pipe(source('fe.js'))
    .pipe(gulp.dest(cfg.dest.browserify));
});


gulp.task('watch', function () {
  return gulp.watch(['src/**/*.js', 'src/templates/*'], function () {
    gulp.run('compile-js');
  });
});

gulp.task('server', ['compile'], function () {
  return browserSync.init(['bin/*.js'], {
    server: {
      baseDir: './bin'
    }
  });
});
