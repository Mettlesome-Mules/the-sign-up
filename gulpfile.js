// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var react = require('gulp-react')
var sass  = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlreplace = require('gulp-html-replace');
var mocha = require('gulp-mocha');
 

var path = {
  // Example using the src/hello_world
  // HTML: 'src/index.html',
  // ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  // JS: ['src/js/*.js', 'src/js/**/*.js'],
  HTML: 'client/index.html',
  ALL: ['client/*.js', 'client/**/*.js', 'client/index.html'],
  JS: ['client/*.js', 'client/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

//********************************************//
// Used to transform/transpile the JS paths 
// from js to jsx
//********************************************//
gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});
//********************************************//
// Used to copy the path.HTML to its path.DEST
//********************************************//
gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});
//********************************************//
// Used to watch the array path.ALL and the files
// listed in that array. On any changes it will
// run the args passed in the list
//********************************************//
gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});
//********************************************//
// gulp build will given the path.JS ['path1', path2]
// concat the files in that folder, uglify them, and
// place those files in the path.DEST_BUILD
//********************************************//
gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});
//********************************************//
// uses htmlreplace
// https://www.npmjs.com/package/gulp-html-replace
// used to replace location of scripts based on build
// location
//********************************************//
gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

// ***************************** //
// Used to catch any syntax errors
// https://www.npmjs.com/package/gulp-jshint
// ***************************** //
gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    // Info on reporters
    // https://www.npmjs.com/package/gulp-jshint#reporters
    // what sort of syntax issues should be caught?
    .pipe(jshint.reporter('default'));
});


// ***************************** //
// which tests should be run?
// https://www.npmjs.com/package/gulp-mocha
// ***************************** //
gulp.task('mocha', function () {
    return gulp.src('spec/test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({reporter: 'nyan'}));
});

//********************************************//
// 'default' specifies what tasks to run when
// running only 'gulp' without args
//********************************************//
gulp.task('default', ['watch']);

//********************************************//
// tasks to run to build out production code
//********************************************//
gulp.task('production', ['replaceHTML', 'build']);

