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

const cssSourceDir = `${sourceDir}/scss`;
const jsSourceDir = `${sourceDir}/js`;

/**
 * Primary Tasks
 */

gulp.task('build', (cb) => {
  runSequence('clean', ['styles', 'scripts', 'copy-images', 'copy-html'], cb);
});

gulp.task('watch', ['build'], () => {
  gulp.watch(`${cssSourceDir}/**/*.*`, ['styles']);
  gulp.watch(`${jsSourceDir}/**/*.*`, ['scripts']);
  gulp.watch(`${sourceDir}/**/*.png`, ['copy-images']);
  gulp.watch(`${sourceDir}/**/*.html`, ['copy-html']);
});

gulp.task('deploy', () => {
  env = 'prod';
  gulp.start('build');
});

gulp.task('default', () => {
  console.log('\n','To do a basic build, run \"gulp build\"');
  console.log('\n','To build and rebuild on changes, run \"gulp watch\"');
  console.log('\n','To build for production, run \"gulp deploy\"','\n');
});

/**
 * Task Details
 */

gulp.task('clean', () => {
  return del([destDir]);
});

gulp.task('styles', () => {
  const files = `${cssSourceDir}/**/main.scss`;

  const sassOptions = {
    includePaths: [
      cssSourceDir,
      'node_modules'
    ],
    outputStyle: (env === 'dev') ? 'nested' : 'compressed',
  };

  return gulp.src(files)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: true,
      remove: true,
    }))
    .pipe(gulpif(env === 'dev', sourcemaps.write('maps')))
    .pipe(gulp.dest(`${destDir}/css`));
});

gulp.task('scripts', () => {
  const files = [
    `${jsSourceDir}/stats.js`,
    `${jsSourceDir}/intro.js`,
    `${jsSourceDir}/skills.js`,
    `${jsSourceDir}/**/*.js`,
  ];

  const uglifyOptions = {
    compress: {
      'drop_console': true,
    }
  };

  const outputFilename = 'app.js';

  return gulp.src(files)
    .pipe(newer(`${destDir}/js/${outputFilename}`))
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat(outputFilename))
    .pipe(gulpif(env === 'dev', sourcemaps.write('maps')))
    .pipe(gulpif(env === 'prod', uglify(uglifyOptions)))
    .pipe(gulp.dest(`${destDir}/js`));
});

gulp.task('copy-images', () => {
  const files = `${sourceDir}/**/*.png`;

  return gulp.src(files)
    .pipe(gulp.dest(destDir));
});

gulp.task('copy-html', () => {
  const files = `${sourceDir}/**/*.html`;

  return gulp.src(files)
    .pipe(gulp.dest(destDir));
});
