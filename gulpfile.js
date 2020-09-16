/* Используем пакеты */
const gulp        = require('gulp');
const browserSync = require('browser-sync'); /* Автоматические обновляет сохранения в браузере */
const sass        = require('gulp-sass'); /* Компилятор sass кода */
const cleanCSS = require('gulp-clean-css'); /* Оптимизирует css файлы */
const autoprefixer = require('gulp-autoprefixer'); /* Подключает автопрефиксы */
const rename = require("gulp-rename"); /* Переименовывает файлы */

/* Создаём задачи, server - название задачи, function - создаём функцию */
gulp.task('server', function() {

    browserSync({ /* Запускаем live-сервер из папки src */
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload); /* Следит за change изменениями во всех файлах .html */
});
/* return - куда возвращается задача, после выполнения, gulp.scr -путь, pipe - выполнение действия */
gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)") /* *.+(scss|sass) - все файлы с расширением scss или sass */
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) /* Компилирует sass код, но он ещё никуда не отправлен, outputStyle - какой стиль компиляции будет - это compressed - сжатый стиль кода, sass.logError показывает ошибки, если они возникают */
        .pipe(rename({suffix: '.min', prefix: ''})) /* При компиляции добавляется суффикс .min */
        .pipe(autoprefixer()) /* Запускаем автопрефиксы */
        .pipe(cleanCSS({compatibility: 'ie8'})) /* Запускает оптимизацию css файлов */
        .pipe(gulp.dest("src/css")) /* Отправляет скомпилированный код в конкретный адрес */
        .pipe(browserSync.stream()); /* После пересохранения файлов, заново запускаем browserSync, т.е. обновляется страница в браузере */
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles')); /* gulp.watch следит за обновлениями файлов, конкретно scss или sass файлами, и если есть обновления gulp.parallel параллельно запускает задачу styles */
})
/* default - задача, которая выполняется по умолчанию */
gulp.task('default', gulp.parallel('watch', 'server', 'styles')); /* gulp.parralel - внутри задачи запускает параллельно команды watch, server, styles */