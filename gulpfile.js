const
    del = require('del'),
    path = require('path'),
    fs = require('fs'),
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    consolidate = require('gulp-consolidate'),
    iconfont = require('gulp-iconfont'),
    imagemin = require('gulp-imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminWebp = require('imagemin-webp'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    gzip = require('gulp-gzip'),
    sketch = require('gulp-sketch'),
    uglify = require('gulp-uglify'),
    data = require('gulp-data'),
    assets = require('postcss-assets'),
    postcssSVG = require('postcss-svg'),
    mustache = require("gulp-mustache"),
    htmlmin = require('gulp-htmlmin'),
    svgSymbols = require('gulp-svg-symbols'),
    gulpif = require('gulp-if'),
    babel = require('gulp-babel');

const paths = {
  src: {
    css: 'Sass/**/*.scss',
    images: 'Images/**/*',
    webfonts: 'Webfonts/**/*',
    iconfonts: 'assets/Fonts/',
    iconfont: {
      sketchFile: 'assets/Iconfont/iconfont-18px.sketch',
      templates: 'Iconfont/Templates/',
      sass: 'assets/Sass/base/'
    }
  },
  public: {
    root: 'dist/',
    images: 'assets/Images/',
    iconfonts: 'assets/Fonts/',
    webfonts: 'assets/Webfonts/'
  }
};

gulp.task('clean:iconfonts', function () {
  return del([path.resolve(paths.public.root+paths.public.iconfonts+'**/*')], {force: true});
});

gulp.task('clean:webfonts', function () {
  return del([path.resolve(paths.public.root+paths.public.webfonts+'**/*')], {force: true});
});

// TASK iconfont
// generate iconfont
gulp.task('build:iconfont', function () {
  /**
   * Font settings
   */
  const fontName = 'iconfont'; // set name of your symbol font
  const className = 'u-icon'; // set class name in your CSS
  const template = 'fontawesome-style'; // or 'foundation-style'


  /**
   * Recommended to get consistent builds when watching files
   * See https://github.com/nfroidure/gulp-iconfont
   */
  let runTimestamp = Math.round(Date.now() / 1000);

  return gulp.src('Iconfont/iconfont-18px.sketch')
      .pipe(sketch({
        export: 'artboards',
        formats: 'svg'
      }))
      .pipe(iconfont({
        'fontName': fontName,
        // 'formats': ['ttf', 'eot', 'woff2', 'woff', 'svg'],
        'formats': ['woff2', 'woff'],
        'timestamp': runTimestamp,
        log: function () {
        }
      }))
      .on('glyphs', function (glyphs) {
        const options = {
          'className':className,
          'fontName':fontName,
          'timestamp': runTimestamp,
          fontPath: '../Fonts/',
          glyphs: glyphs.map(mapGlyphs)
        };
        gulp.src('Iconfont/Templates/fontawesome-style.css.txt')
            .pipe(consolidate('lodash', options))
            .pipe(rename({basename: '_icons', extname:'.scss'}))
            .pipe(gulp.dest('assets/Sass/base'));
        gulp.src('Iconfont/Templates/fontawesome-style.mustache')
            .pipe(consolidate('lodash', options))
            //.pipe(rename({basename: 'Iconfont', extname:'.html'}))
            //.pipe(gulp.dest(path.resolve(paths.src.root+paths.src.iconfont.partial)))
      })
      .pipe(gulp.dest('assets/Fonts'))
});



/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs(glyph) {
  return {name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0)}
}


// webfonts copy to public
gulp.task('build:webfonts', function () {
  return gulp.src(path.resolve(paths.src.root+paths.src.webfonts))
      .pipe(newer(path.resolve(paths.public.root+paths.public.webfonts)))
      .pipe(gulp.dest(path.resolve(paths.public.root+paths.public.webfonts)));
});

gulp.task('build', gulp.series([
  'build:iconfont',
  'build:webfonts'
]));


gulp.task('default', gulp.parallel('build'));
