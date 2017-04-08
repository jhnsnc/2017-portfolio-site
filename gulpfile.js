'use strict';

// general
const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const newer = require('gulp-newer');

// sass
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// javascript
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// sourcemaps
const sourcemaps = require('gulp-sourcemaps');

// flags
let env = 'dev'; // default
const gulpif = require('gulp-if');

/**
 * Variables
 */

const sourceDir = 'src';
const destDir = 'dist';

const config = {
  cssSrcDir: sourceDir + '/scss',
  jsSrcDir: sourceDir + '/js',
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions'],
    cascade: true,
    remove: true
  }
};

/**
 * Primary Tasks
 */

gulp.task('build', (cb) => {
  runSequence('clean', ['styles', 'scripts'], cb);
});

gulp.task('watch', ['build'], () => {
  gulp.watch(config.cssSrcDir + '/**/*.*', ['styles']);
  gulp.watch(config.jsSrcDir + '/**/*.*', ['scripts']);
});

gulp.task('deploy', () => {
  env = 'prod';
  gulp.start('build');
});

gulp.task('default', () => {
  console.log('');
  console.log('To do a basic build, run \"gulp build\"');
  console.log('');
  console.log('To build and rebuild on changes, run \"gulp watch\"');
  console.log('');
  console.log('To build for production, run \"gulp deploy\"');
  console.log('');
});

/**
 * Task Details
 */

gulp.task('clean', () => {
  return del([destDir]);
});

gulp.task('styles', () => {
  const files = config.cssSrcDir + '/**/main.scss';

  const sassOptions = {
    outputStyle: (env === 'dev') ? 'nested' : 'compressed'
  };

  return gulp.src(files)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulpif(env === 'dev', sourcemaps.write('maps')))
    .pipe(gulp.dest(destDir + '/css'));
});

gulp.task('scripts', () => {
  const files = [
    config.jsSrcDir + '/**/*.js'
  ];

  const uglifyOptions = {
    compress: {
      'drop_console': true
    }
  };

  const outputFilename = 'app.js';

  return gulp.src(files)
    .pipe(newer(destDir + 'js/' + outputFilename))
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat(outputFilename))
    .pipe(gulpif(env === 'dev', sourcemaps.write('maps')))
    .pipe(gulpif(env === 'prod', uglify(uglifyOptions)))
    .pipe(gulp.dest(destDir + '/js'));
});
