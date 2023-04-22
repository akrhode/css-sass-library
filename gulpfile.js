const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
//function to compile SASS
function buildStyles() {
  return src("app/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

//function to watch the SASS file to recompile upon changes
function watchTask() {
  watch(["*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
