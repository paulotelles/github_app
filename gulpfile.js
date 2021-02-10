// REQUIRES
const gulp = require("gulp");
const sass = require("gulp-sass");
const log = require("fancy-log");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const prefix = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const browserify = require("gulp-browserify");

// Process Scripts
gulp.task("js", function () {
  return gulp
    .src(["src/js/pages/*.js"])
    .pipe(
      browserify({
        insertGlobals: true,
      })
    )

    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify().on("error", log))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Get the final SCSS file and convert to CSS
gulp.task("sass", function () {
  return gulp
    .src("src/sass/pages/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Use Browsersync to create local server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.src("./src/img/*").pipe(gulp.dest("./dist/img"));

  gulp.watch("src/js/**/*.js", gulp.series("js")),
    gulp.watch("src/sass/**/*.scss", gulp.series("sass")),
    gulp.watch("./*.html").on("change", browserSync.reload);
});
