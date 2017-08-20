

const gulp = require("gulp");



const sass = require("gulp-sass");

const sourcemaps = require("gulp-sourcemaps");
const browserSync = require('browser-sync').create();


gulp.task("sass", function () {


    return gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task("watch", function () {
    gulp.watch("sass/*.scss", ["sass"])

});

gulp.task("default", ["sass", "watch"]);
