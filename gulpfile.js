const { src, dest, watch, parallel, series } = require('gulp');

const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const uglify        = require('gulp-uglify-es').default;
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const del           = require('del');

function browsersync() {
    browserSync.init({
        server : {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return del('dist');
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src([
        'node_modules/normalize.css/normalize.css',
        'app/fonts/**/*.css',
        'app/css/**/*.css',
        'app/sass/**/*.sass'
    ])
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(concat('style.min.css'))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 10 version'],
                grid: true
            }))
            .pipe(dest('app'))
            .pipe(browserSync.stream())
}

function watching() {
    watch(['app/sass/**/*.sass'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app'})
        .pipe(dest('dist'))
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.images = images;

exports.build = series(cleanDist, images, build);
exports.default = parallel(browsersync, watching);