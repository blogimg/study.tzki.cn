var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var htmlmin = require("gulp-htmlmin");
var htmlclean = require("gulp-htmlclean");
// var imagemin = require("gulp-imagemin");
// var workbox = require("workbox-build");
var uglifyjs = require("terser");
var composer = require("gulp-uglify/composer");
var pump = require("pump");
var minify = composer(uglifyjs, console);

//pwa
gulp.task("generate-service-worker", () => {
  return workbox.injectManifest({
    swSrc: "./sw-template.js",
    swDest: "./public/sw.js",
    globDirectory: "./public",
    globPatterns: ["**/*.{html,css,js,json,woff2}"],
    modifyURLPrefix: {
      "": "./",
    },
  });
});

//js
gulp.task("compress", function (cb) {
  var options = {};
  pump(
    [
      gulp.src(["./public/**/*.js", "!./public/**/*.min.js"]),
      minify(options),
      gulp.dest("./public"),
    ],
    cb
  );
});

//css
gulp.task("minify-css", () => {
  return gulp
    .src("./public/**/*.css")
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest("./public"));
});

// 压缩 public 目录内 html
gulp.task("minify-html", function () {
  return gulp
    .src("./public/**/*.html")
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true, //清除 HTML 注释
        collapseWhitespace: true, //压缩 HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除 <script> 的 type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除 <style> 和 <link> 的 type="text/css"
        minifyJS: true, //压缩页面 JS
        minifyCSS: true, //压缩页面 CSS
        minifyURLs: true,
      })
    )
    .pipe(gulp.dest("./public"));
});

// 压缩 public/uploads 目录内图片
gulp.task("minify-images", async () => {
  gulp
    .src("./public/img/**/*.*")
    .pipe(
      imagemin({
        optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: false, //类型：Boolean 默认：false 多次优化svg直到完全优化
      })
    )
    .pipe(gulp.dest("./public/img"));
});

// 执行 gulp 命令时执行的任务
gulp.task(
  "default",
  gulp.series(
    // gulp.parallel("compress", "minify-html", "minify-css", "minify-images")
    gulp.parallel("compress", "minify-html", "minify-css")
  )
);
