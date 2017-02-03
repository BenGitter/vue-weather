const gulp = require("gulp");
const babel = require("gulp-babel");
const bs = require("browser-sync").create();
 

gulp.task("browserSync", () => {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("babel", () => {
  return gulp.src("script.js")
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("copy", () => {
  var files = ["index.html", "style.css"];
  return gulp.src(files)
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["browserSync"], function(){
  gulp.watch(["script.js"], ["babel", bs.reload]);
  gulp.watch(["index.html", "style.css"], ["copy", bs.reload]);
})