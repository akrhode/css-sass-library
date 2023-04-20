const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//function to compile SASS
function buildStyles() {
  return src("app/**/*.scss").pipe(sass()).pipe(dest("css"));
}

//function to watch the SASS file to recompile upon changes
function watchTask() {
  watch(["*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
