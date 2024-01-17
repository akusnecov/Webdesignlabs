var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var path = {
    css: './src/**/*.css',
    html: {
        pages: './src/pages/**/*.hbs',
        components: './src/components/**/*.hbs',
        componentsPath: './src/components/'
    },
    images: './src/**/images/*',
    build: {
        root: './build/**',
        css: './build/',
        html: './build/',
        images: './build/images/'
    }
};


gulp.task('html', function() {
    return gulp.src(path.html.pages)
        .pipe(handlebars({}, {
            ignorePartials: true,
            batch: path.html.componentsPath
        }))
        .pipe(rename({
            dirname: '.',
            extname: '.html'
        }))
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css', function () {
    return gulp.src(path.css)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('images', function () {
    return gulp.src(path.images)
        .pipe(rename({
            dirname: '.'
        }))
        .pipe(gulp.dest(path.build.images));
});

gulp.task('prod', gulp.series('html', 'css', 'images'));

gulp.task('watch', function (done) {
    gulp.watch(path.html.pages, gulp.series('html'));
    gulp.watch(path.html.components, gulp.series('html'));
    gulp.watch(path.css, gulp.series('css'));
    gulp.watch(path.images, gulp.series('images'));
    done();
});

gulp.task('hotReload', function () {
    browserSync.init({
        server: {
            baseDir: path.build.html
        }
    });
    gulp.watch(path.build.root, function(done) {
        browserSync.reload();
        done();
    })
});

gulp.task('default', gulp.series('html', 'css', 'images', 'watch', 'hotReload'));
